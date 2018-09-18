import { Injectable } from '@angular/core';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../../../courses-list/services/courses.service';
import { Router } from '@angular/router';
import { CoursesListItemModel } from '../../../courses-list/models/courses-list-item.model';

// rxjs
import { Observable, of } from 'rxjs';
import { concatMap, pluck, switchMap, map, catchError } from 'rxjs/operators';
// @Ngrx
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { PaginationInfo } from '../../../courses-list/models/pagination-list.model';
import { coursesCountOnPage, coursesPageNumber } from '../../../common/utils/constant';



@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>,
    private router: Router
  ) {
    console.log('[TASKS EFFECTS]');
  }

  private navigateToMainPage() {
    this.router.navigate(['/']);
  }

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.GetCourses>(CoursesActions.CoursesActionTypes.GET_COURSES),
    pluck('payload'),
    switchMap((payload: PaginationInfo) =>
      this.coursesService.getCoursesItems(payload.countOnPage, payload.pageNumber, payload.searchText).pipe(
        map(res => new CoursesActions.GetCoursesSuccess(res)),
        catchError(error => of(new CoursesActions.GetCoursesError(error)))
      )
    )
  );

  @Effect()
  getCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.GetCourse>(CoursesActions.CoursesActionTypes.GET_COURSE),
    pluck('payload'),
    switchMap(payload =>
      this.coursesService.getCourseById(Number(payload)).pipe(
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
            this.navigateToMainPage();
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
            this.navigateToMainPage();
            return new CoursesActions.CreateCourseSuccess(course);
          }
        ),
        catchError(error => of(new CoursesActions.CreateCourseError(error)))
      )
    )
  );

  // @Effect()
  // deleteCourse$: Observable<Action[]>  = this.actions$.pipe(
  //   ofType<CoursesActions.DeleteCourse>(CoursesActions.CoursesActionTypes.DELETE_COURSE),
  //   pluck('payload'),
  //   concatMap((payload: CoursesListItemModel) =>
  //     this.coursesService.removeCoursesItem(payload.id).pipe(
  //       map(() => {
  //           // this.store.dispatch(new CoursesActions.GetCourses());
  //           return [new CoursesActions.GetCourses(), new CoursesActions.DeleteCourseSuccess()];
  //         }
  //       ),
  //       catchError(error => of([new CoursesActions.DeleteCourseError(error)]))
  //     )
  //   )
  // ); // TODO it is dose not work

  @Effect()
  deleteCourse$: Observable<Action>  = this.actions$.pipe(
    ofType<CoursesActions.DeleteCourse>(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    pluck('payload'),
    concatMap((payload: CoursesListItemModel) =>
      this.coursesService.removeCoursesItem(payload.id).pipe(
        map(() => {
            this.store.dispatch(new CoursesActions.GetCourses(
              {
                countOnPage: coursesCountOnPage,
                pageNumber: coursesPageNumber,
                searchText: ''
              })
            );
            return new CoursesActions.DeleteCourseSuccess();
          }
        ),
        catchError(error => of(new CoursesActions.DeleteCourseError(error)))
      )
    )
  );

  @Effect()
  searchCourses$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.SearchCourses>(CoursesActions.CoursesActionTypes.SEARCH_COURSES),
    pluck('payload'),
    switchMap((payload: PaginationInfo) =>
      this.coursesService.getCoursesItems(payload.countOnPage, payload.pageNumber, payload.searchText).pipe(
        map(res => new CoursesActions.SearchCoursesSuccess(res)),
        catchError(error => of(new CoursesActions.SearchCoursesError(error)))
      )
    )
  );
}
