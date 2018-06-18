import { Component, Input, OnInit } from '@angular/core';
import { CoursesListItem } from '../models/courses-list-item.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public coursesItem: CoursesListItem;

  constructor() { }

  ngOnInit() {
  }

}
