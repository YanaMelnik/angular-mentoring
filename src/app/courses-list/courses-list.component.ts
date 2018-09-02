import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FilterCoursesPipe ]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesItems: CoursesListItemModel[];
  public courseName: string;
  public showMoreCourse: boolean;
  public pageNumber = 1;
  public countOnPage = 3;
  private coursesItemsSubscription;
  private searchedCourseSubscription;
  private deletedCourseSubscription;

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.getCoursesItems(this.countOnPage, this.pageNumber);
  }

  getCoursesItems(countOnPage: number, pageNumber: number) {
    this.coursesItemsSubscription = this.coursesService.getCoursesItems(countOnPage, pageNumber)
      .subscribe(
      (res) => {
        this.coursesItems = this.coursesItems.slice();
        this.coursesItems.push(...res.items);
        this.showMoreCourse = res.moreAvailable;
        }, // TODO: Can't understand - i change link but change detected didn't run
      err => console.log('Can\'t retrieve courses', err)
    );
  }

  onDeleteCourse(courseId: number) {
    const needToDel = window.confirm('Are you really want to delete this course?');
    if (needToDel) {
      this.deletedCourseSubscription = this.coursesService.removeCoursesItem(courseId)
        .subscribe(
          () => {
            this.countOnPage = 3;
            this.pageNumber = 1;
            this.coursesItems = [];
            this.getCoursesItems(this.countOnPage, this.pageNumber);
          },
          err => {
            console.log('Sorry, this course is already absent', err);
          }
        );
    }
  }

  onEditCourse(courseId: number): void {
    const link = ['/courses', courseId];
    this.router.navigate(link);
  }

  onSearchCourse(courseName: string) {
    this.courseName = courseName;

    this.searchedCourseSubscription = this.coursesService.searchCourseItem(courseName)
      .subscribe(
        (res: any) => { this.coursesItems = res; },
        err => {
          console.log('Can\'t retrieve courses', err);
          this.coursesItems = [];
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

  isCourseShown() {
    return this.coursesItems.length > 0;
  }

  ngOnDestroy(): void {
    this.coursesItemsSubscription.unsubscribe();
    this.searchedCourseSubscription.unsubscribe();
    this.deletedCourseSubscription.unsubscribe();
  }
}
