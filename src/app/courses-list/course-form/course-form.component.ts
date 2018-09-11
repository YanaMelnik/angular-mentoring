import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { fieldHasError } from '../../common/utils/utils';
import DATE_FORMAT from '../../common/constants/date-format';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  courseForm: FormGroup;
  course: CoursesListItemModel = new CoursesListItem();
  private createFormSubscription;
  private updateCourseSubscription;
  private addCourseSubscription;

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

    this.createFormSubscription = this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return this.coursesService.getCourseById(+params.get('id'));
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
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
      description: new FormControl(
        this.course.description,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)
        ]),
      creationDate: new FormControl(
        this.datePipe.transform(this.course.creationDate, DATE_FORMAT.DATE_FIELD),
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
        ]),
      id: new FormControl(
        this.course.id
      )
    });
  }

  save() {
    const course = this.courseForm.getRawValue();

    if (course.id) {
      this.updateCourseSubscription = this.coursesService.updateCoursesItem(course)
        .subscribe(
          () => {},
          err => console.log(err)
        );
    } else {
      this.addCourseSubscription = this.coursesService.addCourse(course)
        .subscribe(
          () => {},
          err => console.log(err)
        );
    }

    this.router.navigate(['/courses']);
  }

  cancel(): void {
    console.log('Bye bye');
    this.router.navigate(['/courses']);
  }

  isFieldInvalid(formControl: AbstractControl): boolean {
    return fieldHasError(formControl);
  }

  ngOnDestroy(): void {
    [
      this.createFormSubscription,
      this.updateCourseSubscription,
      this.addCourseSubscription
    ]
      .filter(subscrip => !!subscrip)
      .forEach(item => item.unsubscribe());
  }
}
