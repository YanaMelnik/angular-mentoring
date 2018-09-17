import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { Router } from '@angular/router';

// rxjs
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getCoursesData, getCoursesError } from '../core/+store';
import * as CoursesActions from '../core/+store/courses/courses.actions';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { AutoUnsubscribe } from '../core/decorator';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterCoursesPipe]
})

@AutoUnsubscribe(['coursesItemsSubscription', 'searchedCourseSubscription'])
export class CoursesListComponent implements OnInit {
  public coursesItems = new BehaviorSubject([]);
  public courseName: string;
  public showMoreCourse: boolean;
  public pageNumber = 1;
  public countOnPage = 3;
  private coursesItemsSubscription: Subscription;
  private searchedCourseSubscription: Subscription;
  private searchInput = new Subject<string>();
  public courses$: Observable<ReadonlyArray<CoursesListItemModel>>;
  public coursesError$: Observable<Error | string>;

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
    this.store.dispatch(new CoursesActions.GetCourses());

    this.searchInput
      .pipe(
        filter(val => val.length === 0 || val.length >= 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((courseName) => {
        console.log(courseName);
        this.doSearchCourse(courseName.toString());
      });
  }

  getCoursesItems(countOnPage: number, pageNumber: number) {
    this.coursesItemsSubscription = this.coursesService.getCoursesItems(countOnPage, pageNumber)
      .subscribe(
        (res) => {
          this.coursesItems.next([...res.items]); // TODO: problem with show more
          this.showMoreCourse = res.moreAvailable;
        },
        err => console.log('Can\'t retrieve courses', err)
      );
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

  private doSearchCourse(courseName: string) {
    this.searchedCourseSubscription = this.coursesService.searchCourseItem(courseName)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.coursesItems.next(res);
        },
        err => {
          console.log('Can\'t retrieve courses', err);
          this.coursesItems.next([]);
        }
      );
  }

  onAddingCourse() {
    this.router.navigate(['/courses/new']);
  }

  showMore() {
    this.pageNumber += 1;
    this.getCoursesItems(this.countOnPage, this.pageNumber);
  }
}
