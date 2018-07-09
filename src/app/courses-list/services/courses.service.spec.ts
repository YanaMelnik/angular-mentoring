import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CoursesListItem } from '../models/courses-list-item.model';

describe('CoursesService', () => {
  let sut: CoursesService;
  beforeEach(() => {
    sut = new CoursesService();
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  // TODO: I had problem with coverage without this test, can I pass this problem in another way?
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
});
