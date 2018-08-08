import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  courseForm: FormGroup;
  course: CoursesListItemModel = new CoursesListItem();
  urlId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.course = new CoursesListItem(
      null,
      '',
      null,
      null,
      null,
      '');

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          this.urlId = +params.get('id');
          return this.coursesService.getCourseById(this.urlId);
        }))
      .subscribe(
        course => {
          this.course = {...course};
          this.createForm();
          },
        err => {
          console.log(err);
        }
      );

    this.createForm();
  }

  private createForm() {
    this.courseForm = new FormGroup({
      title: new FormControl(
        this.course.title,
        [
          Validators.required,
          Validators.minLength(3)
        ]),
      description: new FormControl(
        this.course.description,
        [
          Validators.required,
          Validators.minLength(3)
        ]),
      date: new FormControl(
        this.datePipe.transform(this.course.creationDate, 'yyyy-MM-dd'),
        [
          Validators.required
        ]),
      duration: new FormControl(
        this.course.duration,
        [
          Validators.required,
          Validators.minLength(1)
        ]),
      authors: new FormControl(
        '',
        [
          Validators.required
        ])
    });
  }

  save() {
    const course = this.courseForm.getRawValue();

    if (this.urlId) {
      course.id = this.urlId;
      const newCourse = this.coursesService.createCourse(course);
      this.coursesService.updateCoursesItem(newCourse);
    } else {
      const newCourse = this.coursesService.createCourse(course);
      this.coursesService.addCourse(newCourse);
    }

    this.router.navigate(['/courses']);
    console.log(this.courseForm);
  }

  cancel(): void {
    console.log('Bye bye');
    this.router.navigate(['/courses']);
  }
}
