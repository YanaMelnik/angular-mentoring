import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public coursesItems: CoursesListItemModel[];


  constructor(private coursesService: CoursesService) {
    this.coursesItems = [];
  }

  ngOnInit() {
    console.log('On init');
    this.coursesItems = this.coursesService.getCoursesItems();
  }

  ngOnChanges() {
    console.log('On Changes');
  }

  ngDoCheck() {
    console.log('Do Check');
  }

  ngAfterContentInit() {
    console.log('After Content Init');
  }

  ngAfterContentChecked() {
    console.log('After Content Checked');
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }

  ngAfterViewChecked() {
    console.log('After View Checked');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  onDeleteCourse(courseId: number) {
    console.log(courseId);
  }

  showMore() {
    console.log('Show more.');
  }

}
