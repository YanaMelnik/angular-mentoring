import { CoursesListItemModel } from '../../../courses-list/models/courses-list-item.model';

export interface CoursesState {
  data: ReadonlyArray<CoursesListItemModel>;
  selectedCourse: Readonly<CoursesListItemModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly searchCourse: string;
  readonly paginationInfo: object;
  readonly moreAvailableCourse: boolean;
  readonly error: Error | string;
}

export const initialCourseState: CoursesState = {
  data: [],
  selectedCourse: null,
  loading: false,
  loaded: false,
  searchCourse: null,
  paginationInfo: null,
  moreAvailableCourse: false,
  error: null
};
