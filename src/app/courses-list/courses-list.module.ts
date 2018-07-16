import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { FormsModule } from '@angular/forms';
import { HighlightNewCourseDirective } from './courses-list-item/directives/highlight-new-course.directive';
import { DurationModifyPipe } from './courses-list-item/pipes/duration-modify.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByCourseDatePipe } from './pipes/order-by-course-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchCourseComponent,
    HighlightNewCourseDirective,
    DurationModifyPipe,
    FilterCoursesPipe,
    OrderByCourseDatePipe
  ],
  exports: [CoursesListComponent, SearchCourseComponent]
})
export class CoursesListModule {
}
