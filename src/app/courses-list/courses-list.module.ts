import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchCourseComponent],
  exports: [CoursesListComponent, SearchCourseComponent]
})
export class CoursesListModule { }
