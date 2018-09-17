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
import { CourseFormComponent } from './course-form/course-form.component';
import { DurationComponent } from './course-form/duration/duration.component';
import { DateComponent } from './course-form/date/date.component';
import { MultiselectComponent } from './course-form/multiselect/multiselect.component';
import { CoursesListRoutingModule } from './courses-list-routing.module';
import { StoreModule } from '@ngrx/store';
import { CoursesEffects, coursesReducer } from './../core/+store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesListRoutingModule,
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchCourseComponent,
    HighlightNewCourseDirective,
    DurationModifyPipe,
    FilterCoursesPipe,
    OrderByCourseDatePipe,
    CourseFormComponent,
    DurationComponent,
    DateComponent,
    MultiselectComponent
  ],
  exports: [
    CoursesListComponent,
    SearchCourseComponent,
    CourseFormComponent
  ]
})
export class CoursesListModule {
}
