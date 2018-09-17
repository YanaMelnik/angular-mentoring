// import { Action } from '@ngrx/store';
// import { UserInfoModel } from '../../header/user-entity/user-entity.model';
//
// // [Authentication]- namespace
// export enum AuthenticationActionTypes {
//   LOGIN_AUTH = '[Authentication] LOGIN_AUTH',
//   LOGIN_AUTH_SUCCESS = '[Authentication] LOGIN_AUTH_SUCCESS',
//   LOGIN_AUTH_ERROR   = '[Authentication] LOGIN_AUTH_ERROR',
//   LOGOUT_AUTH = '[Authentication] LOGOUT_AUTH',
//   LOGOUT_AUTH_SUCCESS = '[Authentication] LOGOUT_AUTH_SUCCESS',
//   LOGOUT_AUTH_ERROR = '[Authentication] LOGOUT_AUTH_ERROR',
//   IS_AUTH = '[Authentication] IS_AUTH',
//   IS_AUTH_SUCCESS = '[Authentication] IS_AUTH',
//   IS_AUTH_ERROR   = '[Authentication] IS_AUTH'
// }
//
// export class LoginAuth implements Action {
//   readonly type = AuthenticationActionTypes.LOGIN_AUTH;
// }
//
// export class LoginAuthSuccess implements Action {
//   readonly type = AuthenticationActionTypes.LOGIN_AUTH_SUCCESS;
//   constructor(public payload: UserInfoModel) { }
// }
//
// export class LoginAuthError implements Action {
//   readonly type = AuthenticationActionTypes.LOGIN_AUTH_ERROR;
//   constructor(public payload: Error | string) { }
// }
//
// export class LogoutAuth implements Action {
//   readonly type = AuthenticationActionTypes.LOGOUT_AUTH;
// }
//
// export class LogoutAuthSuccess implements Action {
//   readonly type = AuthenticationActionTypes.LOGOUT_AUTH_SUCCESS;
// }
//
// export class LogoutAuthError implements Action {
//   readonly type = AuthenticationActionTypes.LOGOUT_AUTH_ERROR;
//   constructor(public payload: Error | string) { }
// }
//
// // export class IsAuth implements Action {
// //   readonly type = AuthenticationActionTypes.IS_AUTH;
// //   constructor(public payload: CoursesListItemModel) { }
// // }
// //
// // export class IsAuthSuccess implements Action {
// //   readonly type = AuthenticationActionTypes.IS_AUTH_SUCCESS;
// //   constructor(public payload: CoursesListItemModel) {}
// // }
// //
// // export class IsAuthError implements Action {
// //   readonly type = AuthenticationActionTypes.IS_AUTH_ERROR;
// //   constructor(public payload: Error | string) {}
// // }
//
// export type AuthenticationActions =
//   | LoginAuth
//   | LoginAuthSuccess
//   | LoginAuthError
//   | LogoutAuth
//   | LogoutAuthSuccess
//   | LogoutAuthError;
//   // | IsAuth
//   // | IsAuthSuccess
//   // | IsAuthError;
