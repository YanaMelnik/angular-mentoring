import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  public searchCourse: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log(this.searchCourse);
  }

}
