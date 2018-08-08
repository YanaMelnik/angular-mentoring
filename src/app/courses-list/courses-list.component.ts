import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FilterCoursesPipe ]
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItemModel[];
  public courseName: string;

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private filterCoursePipe: FilterCoursesPipe) {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.coursesItems = this.coursesService.coursesItemList;
  }

  onDeleteCourse(courseId: number) {
    const needToDel = window.confirm('Are you really want to delete this course?');
    if (needToDel) {
      this.coursesService.removeCoursesItem(courseId);
    }
  }

  onEditCourse(courseId: number): void {
    const link = ['/courses', courseId];
    this.router.navigate(link);
    // this.coursesService.editCoursesItem(courseId);
  }

  onSearchCourse(courseName: string) {
    this.courseName = courseName;
  }

  onAddingCourse(course) {
    // const addCourse = this.coursesService.createCourse(course);
    // this.coursesService.addCourse(addCourse);
    // this.coursesItems = this.coursesService.getCoursesItems();
    this.router.navigate(['/courses/new']);
  }

  showMore() {
    console.log('Show more.');
  }

  isCourseShown() {
    return !(this.filterCoursePipe.transform(this.coursesItems, this.courseName).length === 0);
  }
}
