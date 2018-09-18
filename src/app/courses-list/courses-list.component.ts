import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { AutoUnsubscribe } from '../core/decorator';
import { coursesCountOnPage, coursesPageNumber } from '../common/utils/constant';
import { Router } from '@angular/router';

// rxjs
import { Subject, Observable } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getCoursesData, getCoursesError, getMoreCourseInfo } from '../core/+store';
import * as CoursesActions from '../core/+store/courses/courses.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterCoursesPipe]
})

@AutoUnsubscribe(
  [
    'coursesItemsSubscription',
    'searchedCourseSubscription'
  ]
)
export class CoursesListComponent implements OnInit {
  public courseName = '';
  public showMoreCourse$: Observable<boolean>;
  public pageNumber = coursesPageNumber;
  public countOnPage = coursesCountOnPage;
  public courses$: Observable<ReadonlyArray<CoursesListItemModel>>;
  public coursesError$: Observable<Error | string>;
  private searchInput = new Subject<string>();

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.courses$ = this.store.pipe(select(getCoursesData));
    this.coursesError$ = this.store.pipe(select(getCoursesError));
    this.showMoreCourse$ = this.store.pipe(select(getMoreCourseInfo));
    this.store.dispatch(new CoursesActions.GetCourses(
      {
        countOnPage: this.countOnPage,
        pageNumber: this.pageNumber,
        searchText: ''
        }
      )
    );

    this.searchInput
      .pipe(
        filter(val => val.length === 0 || val.length >= 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((courseName) => {
        console.log(courseName);
        if (courseName.length) {
          this.store.dispatch(new CoursesActions.GetCourses(
            {
              countOnPage: coursesCountOnPage,
              pageNumber: coursesPageNumber,
              searchText: courseName
            }
          ));
        } else {
          this.store.dispatch(new CoursesActions.GetCourses(
            {
              countOnPage: coursesCountOnPage,
              pageNumber: coursesPageNumber,
              searchText: ''
            }
          )
          );
        }
      });
  }

  onDeleteCourse(course: CoursesListItemModel) {
    const needToDel = window.confirm('Are you really want to delete this courses?');
    if (needToDel) {
      this.store.dispatch(new CoursesActions.DeleteCourse(course));
    }
  }

  onEditCourse(courseId: number): void {
    const link = ['/courses', courseId];
    this.router.navigate(link);
  }

  onSearchCourse(courseName: string) {
    this.courseName = courseName;
    this.searchInput.next(this.courseName);
  }

  onAddingCourse() {
    this.router.navigate(['/courses/new']);
  }

  showMore() {
    this.pageNumber += 1;
    this.store.dispatch(new CoursesActions.GetCourses(
      {
        countOnPage: this.countOnPage,
        pageNumber: this.pageNumber,
        searchText: this.courseName
      }
      )
    );
  }
}
