import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  @Output() public searchCourses = new EventEmitter<string>();
  @Output() public addCourses = new EventEmitter();

  @Input() public searchCriteria: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('Ready');
    this.searchCourses.emit(this.searchCriteria);
  }

  addCourse() {
    this.addCourses.emit();
  }
}
