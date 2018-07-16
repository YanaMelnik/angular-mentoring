import { OrderByCourseDatePipe } from './order-by-course-date.pipe';
import { CoursesListItem } from '../models/courses-list-item.model';
import { UtilsService } from '../../utils/utils.service';
import { CoursesService } from '../services/courses.service';

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
  const utilsService: UtilsService = new UtilsService();
  const pipe = new OrderByCourseDatePipe(utilsService);

  beforeEach(() => {
    spyOn(utilsService, 'parseDateString').and.returnValue('1234567');
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not sort element if user have not courses', () => {
    const emptyListOfCourses = [];
    expect(pipe.transform(emptyListOfCourses)).toEqual([]);
  });

  it('should sort element if user have courses by date asceding', () => {
    pipe.transform(allCourses);
    expect(utilsService.parseDateString).toHaveBeenCalledTimes(2);
  });

  it('should return array with sorting by date asceding', () => {
    expect(pipe.transform(allCourses)).toEqual([allCourses[0], allCourses[1]]);
  });
});
