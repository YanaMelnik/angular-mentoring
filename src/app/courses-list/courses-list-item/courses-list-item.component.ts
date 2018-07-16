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

  delete() {
    const needToDel = window.confirm('Are you really want to delete this course?');
    if (needToDel) {
      this.deleteCourse.emit(this.coursesItem.id);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
