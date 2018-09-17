import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { DatePipe } from '@angular/common';
import { fieldHasError } from '../../common/utils/utils';
import DATE_FORMAT from '../../common/constants/date-format';
// rxjs
import { Observable, Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../core/decorator';
// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, CoursesState, getCoursesState, getSelectedCourse } from '../../core/+store';
import * as CoursesActions from '../../core/+store/courses/courses.actions';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
@AutoUnsubscribe()
export class CourseFormComponent implements OnInit, OnDestroy {
  courseForm: FormGroup;
  course: CoursesListItemModel = new CoursesListItem();
  private createFormSubscription;
  private updateCourseSubscription;
  private addCourseSubscription;
  // public coursesState$: Observable<CoursesState>;
  private sub: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.course = new CoursesListItem(
      null,
      '',
      null,
      null,
      null,
      '');

    // this.coursesState$ = this.store.pipe(select(getCoursesState));
    //
    // this.sub = this.coursesState$
    //   .subscribe(
    //     coursesState => {
    //   if (coursesState.selectedCourse) {
    //     this.course = coursesState.selectedCourse;
    //   } else {
    //     this.course = new CoursesListItem(
    //       null,
    //       '',
    //       null,
    //       null,
    //       null,
    //       '');
    //   } });

    this.sub = this.store
      .pipe(
        select(getSelectedCourse)
      )
      .subscribe(course => {
        if (course) {
          this.course = course;
        } else {
          this.course = new CoursesListItem(
            null,
            '',
            null,
            null,
            null,
            '');
        }
      });

    this.route.paramMap
      .subscribe(
        params => {
          const id = params.get('id');
          if (id) {
            this.store.dispatch(new CoursesActions.GetCourse(+id));
          }
        });

    if (this.course) {
      this.createForm();
    }
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
      this.store.dispatch(new CoursesActions.UpdateCourse(course));
    } else {
      this.store.dispatch(new CoursesActions.CreateCourse(course));
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
