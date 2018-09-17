import { FilterCoursesPipe } from './filter-courses.pipe';
import { CoursesListItem } from '../models/courses-list-item.model';

describe('FilterCoursesPipe', () => {
  const allCourses = [
      new CoursesListItem(
        1,
        'Video #1',
        new Date(2018, 1, 1),
        true,
        1,
        'Example'),
      new CoursesListItem(
        2,
        'Video Course #2',
        new Date(2018, 1, 1),
        true,
        1,
        'Example')
  ];
  const pipe = new FilterCoursesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all element if user do not enter any word for searching', () => {
    const searchWord = '';
    expect(pipe.transform(allCourses, searchWord)).toEqual(allCourses);
  });

  it('should not return any element if word for searching does not fit any courses', () => {
    const searchWord = '3';
    expect(pipe.transform(allCourses, searchWord)).toEqual([]);
  });

  it('should return some element that march the search word not paying attention to uppercase', () => {
    const searchWord = 'course';
    expect(pipe.transform(allCourses, searchWord)).toEqual([allCourses[1]]);
  });
});
