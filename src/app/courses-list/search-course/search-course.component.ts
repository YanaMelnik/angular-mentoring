import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  @Output() public searchCourses = new EventEmitter<string>();

  @Input() public searchCourse: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchCourses.emit(this.searchCourse);
  }

}
