import { Action } from '@ngrx/store';

// [Authentification]- namespace
export enum CoursesActionTypes {
  LOGIN_AUTH = '[Authentification] LOGIN_AUTH',
  LOGIN_AUTH_SUCCESS = '[Authentification] LOGIN_AUTH_SUCCESS',
  LOGIN_AUTH_ERROR   = '[Authentification] LOGIN_AUTH_ERROR',
  LOGOUT_AUTH = '[Authentification] LOGOUT_AUTH',
  LOGOUT_AUTH_SUCCESS = '[Authentification] LOGOUT_AUTH_SUCCESS',
  LOGOUT_AUTH_ERROR = '[Authentification] LOGOUT_AUTH_ERROR',
  IS_AUTH = '[Courses] CREATE_COURSE',
  IS_AUTH_SUCCESS = '[Courses] CREATE_COURSE_SUCCESS',
  IS_AUTH_ERROR   = '[Courses] CREATE_COURSE_ERROR',
  UPDATE_COURSE = '[Courses] UPDATE_COURSE',
  UPDATE_COURSE_SUCCESS = '[Courses] UPDATE_COURSE_SUCCESS',
  UPDATE_COURSE_ERROR   = '[Courses] UPDATE_COURSE_ERROR',
  DELETE_COURSE = '[Courses] DELETE_COURSE',
  DELETE_COURSE_SUCCESS = '[Courses] DELETE_COURSE_SUCCESS',
  DELETE_COURSE_ERROR = '[Courses] DELETE_COURSE_ERROR'
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GET_COURSES;
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_SUCCESS;
  constructor(public payload: CoursesListItemModel[]) { }
}

export class GetCoursesError implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetCourse implements Action {
  readonly type = CoursesActionTypes.GET_COURSE;
  constructor(public payload: number) { }
}

export class GetCourseSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSE_SUCCESS;
  constructor(public payload: CoursesListItemModel) { }
}

export class GetCourseError implements Action {
  readonly type = CoursesActionTypes.GET_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE;
  constructor(public payload: CoursesListItemModel) { }
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_SUCCESS;
  constructor(public payload: CoursesListItemModel) {}
}

export class CreateCourseError implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_ERROR;
  constructor(public payload: Error | string) {}
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE;
  constructor(public payload: CoursesListItemModel) { }
}

export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_SUCCESS;
  constructor(public payload: CoursesListItemModel) { }
}

export class UpdateCourseError implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_ERROR;
  constructor(public payload: Error | string) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: CoursesListItemModel) { }
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_SUCCESS;
  constructor(public payload: CoursesListItemModel) { }
}

export class DeleteCourseError implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export type CoursesActions =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesError
  | GetCourse
  | GetCourseSuccess
  | GetCourseError
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseError
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseError
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseError;
