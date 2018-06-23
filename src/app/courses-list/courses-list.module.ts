import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchCourseComponent],
  exports: [CoursesListComponent, SearchCourseComponent]
})
export class CoursesListModule { }
