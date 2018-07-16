import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from './services/courses.service';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { CoursesListItem } from './models/courses-list-item.model';

describe('CoursesListComponent', () => {
  let sut: CoursesListComponent;
  let courseItemTest: CoursesListItem;
  let coursesService: CoursesService;
  let filterCoursesPipe: FilterCoursesPipe;

  beforeEach(() => {
    coursesService = new CoursesService();
    filterCoursesPipe = new FilterCoursesPipe();
    sut = new CoursesListComponent(coursesService, filterCoursesPipe);

    spyOn(coursesService, 'getCoursesItems').and.returnValue([courseItemTest]);
    spyOn(filterCoursesPipe, 'transform');
    spyOn(console, 'log').and.callThrough();
    courseItemTest = new CoursesListItem(7,
      'Video Course #1',
      new Date(2018, 5, 10),
      true,
      28,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('#showMore', () => {
    it('should show more courses when user click showMore button', () => {
      sut.showMore();
      expect(console.log).toHaveBeenCalledWith('Show more.');
    });
  });

  describe('#onDeleteCourse', () => {
    it('should delete course item when user click delete button', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(coursesService, 'removeCoursesItem');
      sut.onDeleteCourse(courseItemTest.id);
      expect(coursesService.removeCoursesItem).toHaveBeenCalledWith(7);
    });
  });

  describe('#onSearchCourse', () => {
    it('should search course that match with search words when user click search button', () => {
      const courseName = 'course';
      sut.onSearchCourse(courseName);
      expect(sut.courseName).toBe(courseName);
    });
  });

  describe('#ngOnInit', () => {
    it('should set courses item from server on init', () => {
      sut.ngOnInit();
      expect(coursesService.getCoursesItems).toHaveBeenCalledWith();
      expect(sut.coursesItems).toEqual([courseItemTest]);
    });
  });

});
