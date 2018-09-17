// import { AuthenticationActions, AuthenticationActionTypes } from './authentication.actions';
// import { AuthenticationState, initialAuthenticationState } from './authentication.state';
// import { UserInfoModel } from '../../header/user-entity/user-entity.model';
//
// export function coursesReducer(
//   state = initialAuthenticationState,
//   action: AuthenticationActions
// ): AuthenticationState {
//   console.log(`Reducer: Action came in! ${action.type}`);
//
//   switch (action.type) {
//     case AuthenticationActionTypes.LOGIN_AUTH: {
//       console.log('LOGIN_AUTH action being handled!');
//       return {
//         ...state,
//         loading: true
//       };
//     }
//
//     case AuthenticationActionTypes.LOGIN_AUTH_SUCCESS: {
//       console.log('LOGIN_AUTH_SUCCESS action being handled!');
//       const data = {...<UserInfoModel>action.payload};
//       return {
//         ...state,
//         data,
//         loading: false,
//         loaded: true
//       };
//     }
//
//     case AuthenticationActionTypes.LOGIN_AUTH_ERROR: {
//       console.log('LOGIN_AUTH_ERROR action being handled!');
//       const error = action.payload;
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error
//       };
//     }
//
//     case AuthenticationActionTypes.LOGOUT_AUTH: {
//       console.log('GET_COURSE action being handled!');
//       return {
//         ...state,
//         loading: true
//       };
//     }
//
//     case AuthenticationActionTypes.LOGOUT_AUTH_SUCCESS: {
//       console.log('GET_COURSE_SUCCESS action being handled!');
//       const data = {...<UserInfoModel>action.payload};
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         data
//       };
//     }
//
//     case AuthenticationActionTypes.LOGOUT_AUTH_ERROR: {
//       console.log('GET_COURSE_ERROR action being handled!');
//       const error = action.payload;
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error
//       };
//     }
//
//     default: {
//       console.log('UNKNOWN_AUTH action being handled!');
//       return state;
//     }
//   }
// }
