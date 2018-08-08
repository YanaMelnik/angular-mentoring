import { Injectable } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';
import { CoursesListItem } from '../models/courses-list-item.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  public coursesItemList: CoursesListItemModel[];

  constructor() {
  }

  coursesListPromise = Promise.resolve(this.coursesItemList
    ? this.coursesItemList
    : this.getCoursesItems());

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
    const {id = 8, title, date, creationDate, topRates, duration, description} = obj;
    const newCourse = new CoursesListItem(
      id,
      title,
      date || creationDate,
      topRates,
      duration,
      description
    );
    // this.coursesItemList.push(newCourse);
    return newCourse;
  }

  public addCourse(newCourse: CoursesListItemModel) {
    this.coursesItemList.push(newCourse);
  }

  getCourses(): Promise<CoursesListItemModel[]> {
    return this.coursesListPromise;
  }

  public getCourseById(id: number | string): Promise<CoursesListItemModel> {
    return this.getCourses()
      .then(courses => courses.find(elem => elem.id === +id))
      .catch(() => Promise.reject('Error in getCourseById method'));
  }

  public updateCoursesItem(course: CoursesListItemModel): void {
    const editCourseIndex: number = this.coursesItemList.findIndex((elem) => {
      return elem.id === course.id;
    });
    if (editCourseIndex !== -1) {
      this.coursesItemList.splice(editCourseIndex, 1, course);
    }
  }


  public removeCoursesItem(id: number): void {
    const deleteCourseIndex: number = this.coursesItemList.findIndex((elem) => {
      return elem.id === id;
    });
    if (deleteCourseIndex !== -1) {
      this.coursesItemList.splice(deleteCourseIndex, 1);
    }
  }

  // public editCoursesItem(id: number): void {
  //   const editCourseIndex: number = this.coursesItemList.findIndex((elem) => {
  //     return elem.id === id;
  //   });
  //   if (editCourseIndex !== -1) {
  //     console.log('edit course item');
  //   }
  // }
}
