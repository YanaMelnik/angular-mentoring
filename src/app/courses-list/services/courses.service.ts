import { Injectable } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';
import { CoursesListItem } from '../models/courses-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
  }

  public getCoursesItems(): CoursesListItemModel[] {
    return [
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
  }
}
