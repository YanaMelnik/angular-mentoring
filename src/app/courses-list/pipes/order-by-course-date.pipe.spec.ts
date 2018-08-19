import { OrderByCourseDatePipe } from './order-by-course-date.pipe';
import { CoursesListItem } from '../models/courses-list-item.model';
import { parseDateString } from '../../common/utils/utils';

describe('OrderByCourseDatePipe', () => {
  const allCourses = [
    new CoursesListItem(
      1,
      'Video #1',
      new Date(2017, 1, 1),
      true,
      1,
      'Example'),
    new CoursesListItem(
      2,
      'Video Course #2',
      new Date(2016, 1, 1),
      true,
      1,
      'Example')
  ];
  const pipe = new OrderByCourseDatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not sort element if user have not courses', () => {
    const emptyListOfCourses = [];
    expect(pipe.transform(emptyListOfCourses)).toEqual([]);
  });

  it('should return array with sorting by date asceding', () => {
    expect(pipe.transform(allCourses)).toEqual([allCourses[0], allCourses[1]]);
  });
});
