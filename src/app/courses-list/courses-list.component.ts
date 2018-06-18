import { Component, OnInit } from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItemModel[] = [];


  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesItems = this.coursesService.getCoursesItems();
  }

}
