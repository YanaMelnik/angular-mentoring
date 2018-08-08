import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
})
export class CoursesListItemComponent implements OnInit {
  @Input() public coursesItem: CoursesListItemModel;
  @Output() public deleteCourse = new EventEmitter<number>();
  @Output() public editCourse = new EventEmitter<number>();

  delete() {
    this.deleteCourse.emit(this.coursesItem.id);
  }

  edit() {
    this.editCourse.emit(this.coursesItem.id);
  }

  constructor() { }

  ngOnInit() {
  }

}
