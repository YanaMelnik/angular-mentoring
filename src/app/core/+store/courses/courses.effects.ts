import { Injectable } from '@angular/core';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../../../courses-list/services/courses.service';
import { Router } from '@angular/router';
import { CoursesListItemModel } from '../../../courses-list/models/courses-list-item.model';

// rxjs
import { Observable, of } from 'rxjs';
import { concatMap, pluck, switchMap, map, catchError } from 'rxjs/operators';
// @Ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';



@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {
    console.log('[TASKS EFFECTS]');
  }

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.GetCourses>(CoursesActions.CoursesActionTypes.GET_COURSES),
    switchMap(() =>
      this.coursesService.getCoursesItems(10, 1).pipe(
        map(res => new CoursesActions.GetCoursesSuccess(res.items)),
        catchError(error => of(new CoursesActions.GetCoursesError(error)))
      )
    )
  );

  @Effect()
  getCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.GetCourse>(CoursesActions.CoursesActionTypes.GET_COURSE),
    pluck('payload'),
    switchMap(payload =>
      this.coursesService.getCourseById(+payload).pipe(
        map(res => new CoursesActions.GetCourseSuccess(res)),
        catchError(error => of(new CoursesActions.GetCourseError(error)))
      )
    )
  );

  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.UpdateCourse>(CoursesActions.CoursesActionTypes.UPDATE_COURSE),
    pluck('payload'),
    concatMap((payload: CoursesListItemModel) =>
      this.coursesService.updateCoursesItem(payload).pipe(
        map(res => {
            this.router.navigate(['/courses']);
            return new CoursesActions.UpdateCourseSuccess(res);
          }
        ),
        catchError(error => of(new CoursesActions.UpdateCourseError(error)))
      )
    )
  );

  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.CreateCourse>(CoursesActions.CoursesActionTypes.CREATE_COURSE),
    pluck('payload'),
    concatMap((payload: CoursesListItemModel) =>
      this.coursesService.addCourse(payload).pipe(
        map(course => {
            this.router.navigate(['/courses']);
            return new CoursesActions.CreateCourseSuccess(course);
          }
        ),
        catchError(error => of(new CoursesActions.CreateCourseError(error)))
      )
    )
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.DeleteCourse>(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    pluck('payload'),
    concatMap((payload: CoursesListItemModel) =>
      this.coursesService.removeCoursesItem(payload.id).pipe(
        map(() => {
            return new CoursesActions.DeleteCourseSuccess(payload);
          }
        ),
        catchError(error => of(new CoursesActions.DeleteCourseError(error)))
      )
    )
  );

}
