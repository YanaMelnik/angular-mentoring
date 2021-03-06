import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');
export const getCoursesData = createSelector(getCoursesState, (state: CoursesState) => state.data);
export const getCoursesError = createSelector(getCoursesState, (state: CoursesState) => state.error);
export const getSelectedCourse = createSelector(getCoursesState, (state: CoursesState) => state.selectedCourse);
export const getPaginationInfo = createSelector(getCoursesState, (state: CoursesState) => state.paginationInfo);
export const getMoreCourseInfo = createSelector(getCoursesState, (state: CoursesState) => state.moreAvailableCourse);
export const getCoursesLoaded = createSelector(getCoursesState, (state: CoursesState) => state.loaded);
