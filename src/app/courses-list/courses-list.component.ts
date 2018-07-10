import { Component, OnInit } from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './filter-courses.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [ FilterCoursesPipe ]
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItemModel[];
  public courseName: string;

  constructor(private coursesService: CoursesService, private filterCoursePipe: FilterCoursesPipe) {
    this.coursesItems = [];
  }

  ngOnInit() {
    this.coursesItems = this.coursesService.getCoursesItems();
  }

  onDeleteCourse(courseId: number) {
    console.log(courseId);
  }

  onSearchCourse(courseName: string) {
    this.courseName = courseName;
  }

  showMore() {
    console.log('Show more.');
  }

  isShowNoDataMsg() {
    return this.filterCoursePipe.transform(this.coursesItems, this.courseName).length === 0;
  }
}
