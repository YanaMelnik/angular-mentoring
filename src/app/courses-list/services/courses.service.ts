import { Injectable, ɵEMPTY_ARRAY } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';
import { CoursesListItem } from '../models/courses-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesItemList: CoursesListItemModel[];

  constructor() {
  }

  public getCoursesItems(): CoursesListItemModel[] {
    this.coursesItemList = [
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
    return this.coursesItemList;
  }

  public createCourse(obj: any): CoursesListItemModel {
    const {id, title, creationDate, topRates, duration, description} = obj;
    const newCourse = new CoursesListItem(
      id,
      title,
      creationDate,
      topRates,
      duration,
      description
    );
    this.coursesItemList.push(newCourse);
    return newCourse;
  }

  public getCourseById(id: number): CoursesListItemModel {
    const foundCourse = this.coursesItemList.find(elem => elem.id === id);
    if (!foundCourse) {
      return null;
    }
    return foundCourse;
  }

  public updateCoursesItem(): void {
    console.log('Update course');
  }

  public removeCoursesItem(id: number): void {
    const deleteCourseIndex: number = this.coursesItemList.findIndex((elem) => {
      return elem.id === id;
    });
    if (deleteCourseIndex !== -1) {
      this.coursesItemList.splice(deleteCourseIndex, 1);
    }
  }
}
