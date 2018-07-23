import { inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';

describe('CoursesService', () => {
  let sut: CoursesService;
  const firstCourse = new CoursesListItem(1,
    'Video Course #1',
    new Date(2018, 5, 10),
    true,
    28,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
  const secoundCourse = new CoursesListItem(
    2,
    'Video Course #2',
    new Date(2018, 6, 5),
    true,
    27,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

  beforeEach(() => {
    sut = new CoursesService();
    sut.coursesItemList = [
      firstCourse,
      secoundCourse
    ];

    spyOn(console, 'log').and.callThrough();
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getCoursesItems', () => {
    it('should return array of courses list', () => {
      const coursesList = [
        new CoursesListItem(1,
          'Video Course #1',
          new Date(2018, 5, 10),
          true,
          28,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        new CoursesListItem(
          2,
          'Video Course #2',
          new Date(2018, 6, 5),
          true,
          27,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        new CoursesListItem(
          3,
          'Video Course #3',
          new Date(2018, 6, 14),
          false,
          99,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        new CoursesListItem(
          4,
          'Video Course #4',
          new Date(2018, 6, 16),
          true,
          70,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        new CoursesListItem(
          5,
          'Video Course #5',
          new Date(2018, 7, 21),
          false,
          30,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
      ];
     expect(sut.getCoursesItems()).toEqual(coursesList);
    });
  });

  describe('#removeCoursesItem', () => {
    it('should remove courses if it is present in courses list', () => {
     sut.removeCoursesItem(1);
     expect(sut.coursesItemList).toEqual([secoundCourse]);
    });

    it('should not remove courses if it is not present in courses list', () => {
     sut.removeCoursesItem(8);
     expect(sut.coursesItemList).toEqual([firstCourse, secoundCourse]);
    });
  });

  describe('#getCourseById', () => {
    it('should get courses if it is present in courses list', () => {
     expect(sut.getCourseById(1)).toEqual(firstCourse);
    });

    it('should return null if required course is not present in courses list', () => {
      expect(sut.getCourseById(8)).toBeNull();
    });
  });

  describe('#updateCoursesItem', () => {
    it('should update course', () => {
     sut.updateCoursesItem();
     expect(console.log).toHaveBeenCalledWith('Update course');
    });
  });

  describe('#createCourse', () => {
    let objCourse: Object;
    let newCourse: CoursesListItemModel;
    beforeEach(() => {
      objCourse = {
        id: 8,
        title: 'video course 5',
        creationDate: new Date(2018, 12, 12),
        topRates: true,
        duration: 75,
        description: 'Test test'
      };
      newCourse = new CoursesListItem(
        8,
        'video course 5',
        new Date(2018, 12, 12),
        true,
        75,
        'Test test');
    });

    it('should create course', () => {
      expect(sut.createCourse(objCourse)).toEqual(newCourse);
    });

    it('should create course', () => {
      sut.createCourse(objCourse);
     expect(sut.coursesItemList[2]).toEqual(newCourse);
    });
  });
});
