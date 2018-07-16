import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem } from '../models/courses-list-item.model';

describe('CoursesListItemComponent', () => {
  let sut: CoursesListItemComponent;
  let todayYear: number;
  let todayDay: number;
  let todayMonth: number;

  beforeEach(() => {
    sut = new CoursesListItemComponent();
    sut.coursesItem = new CoursesListItem(1,
      'Video Course #1',
      new Date(2018, 5, 10),
      true,
      28,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

    todayYear = new Date().getFullYear();
    todayMonth = new Date().getMonth();
    todayDay = new Date().getDate();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('#delete', () => {
    it('should delete course when user press delete button', () => {
      spyOn(sut.deleteCourse, 'emit');
      sut.coursesItem = new CoursesListItem(1,
        'Video Course #1',
        new Date(2018, 5, 10),
        true,
        28,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

      sut.delete();

      expect(sut.deleteCourse.emit).toHaveBeenCalledWith(sut.coursesItem.id);
    });
  });
});
