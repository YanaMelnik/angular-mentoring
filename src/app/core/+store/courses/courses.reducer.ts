import { CoursesActions, CoursesActionTypes } from './courses.actions';
import { CoursesState, initialCourseState } from './courses.state';
import { CoursesListItemModel } from '../../../courses-list/models/courses-list-item.model';

export function coursesReducer(
  state = initialCourseState,
  action: CoursesActions
): CoursesState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {
    case CoursesActionTypes.GET_COURSES: {
      console.log('GET_COURSES action being handled!');
      return {
        ...state,
        loading: true
      };
    }

    case CoursesActionTypes.GET_COURSES_SUCCESS: {
      console.log('GET_COURSES_SUCCESS action being handled!');
      const data = [...<Array<CoursesListItemModel>>action.payload];
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
        selectedCourse: null,
        searchCourse: null
      };
    }

    case CoursesActionTypes.GET_COURSES_ERROR: {
      console.log('GET_COURSES_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case CoursesActionTypes.GET_COURSE: {
      console.log('GET_COURSE action being handled!');
      return {
        ...state,
        loading: true
      };
    }

    case CoursesActionTypes.GET_COURSE_SUCCESS: {
      console.log('GET_COURSE_SUCCESS action being handled!');
      const selectedCourse = {...<CoursesListItemModel>action.payload};
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedCourse
      };
    }

    case CoursesActionTypes.GET_COURSE_ERROR: {
      console.log('GET_COURSE_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case CoursesActionTypes.CREATE_COURSE: {
      console.log('CREATE_COURSE action being handled!');
      return {...state};
    }

    case CoursesActionTypes.CREATE_COURSE_SUCCESS: {
      console.log('CREATE_COURSE_SUCCESS action being handled!');
      const task = {...<CoursesListItemModel>action.payload};
      const data = [...state.data, task];
      return {
        ...state,
        data
      };
    }

    case CoursesActionTypes.CREATE_COURSE_ERROR: {
      console.log('CREATE_COURSE_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    case CoursesActionTypes.UPDATE_COURSE: {
      console.log('UPDATE_COURSE action being handled!');
      return {...state};
    }

    case CoursesActionTypes.UPDATE_COURSE_SUCCESS: {
      console.log('UPDATE_COURSE_SUCCESS action being handled!');
      const course = {...<CoursesListItemModel>action.payload};
      const data = [...state.data];
      const index = data.findIndex(c => c.id === course.id);
      data[index] = course;
      return {
        ...state,
        data
      };
    }

    case CoursesActionTypes.UPDATE_COURSE_ERROR: {
      console.log('UPDATE_COURSE_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    case CoursesActionTypes.SEARCH_COURSES: {
      console.log('SEARCH_COURSES action being handled!');
      const searchCourse = action.payload;
      return {
        ...state,
        loading: true,
        searchCourse
      };
    }

    case CoursesActionTypes.SEARCH_COURSES_SUCCESS: {
      console.log('SEARCH_COURSES_SUCCESS action being handled!');
      const data = [...<Array<CoursesListItemModel>>action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case CoursesActionTypes.SEARCH_COURSES_ERROR: {
      console.log('SEARCH_COURSES_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case CoursesActionTypes.DELETE_COURSE: {
      console.log('DELETE_COURSE action being handled!');
      return {...state};
    }

    case CoursesActionTypes.DELETE_COURSE_SUCCESS: {
      console.log('DELETE_COURSE_SUCCESS action being handled!');
      return {
        ...state
      };
    }

    case CoursesActionTypes.DELETE_COURSE_ERROR: {
      console.log('DELETE_COURSE_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error };
    }

    default: {
      console.log('UNKNOWN_COURSE action being handled!');
      return state;
    }
  }
}
