import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightNewCourseDirective } from './courses-list-item/directives/highlight-new-course.directive';
import { DurationModifyPipe } from './courses-list-item/pipes/duration-modify.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByCourseDatePipe } from './pipes/order-by-course-date.pipe';
import { CourseAddComponent } from './course-add/course-add.component';
import { DurationComponent } from './course-add/duration/duration.component';
import { DateComponent } from './course-add/date/date.component';
import { MultiselectComponent } from './course-add/multiselect/multiselect.component';
import { CoursesListRoutingModule } from './courses-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesListRoutingModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchCourseComponent,
    HighlightNewCourseDirective,
    DurationModifyPipe,
    FilterCoursesPipe,
    OrderByCourseDatePipe,
    CourseAddComponent,
    DurationComponent,
    DateComponent,
    MultiselectComponent
  ],
  exports: [CoursesListComponent, SearchCourseComponent, CourseAddComponent]
})
export class CoursesListModule {
}
