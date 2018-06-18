import { Injectable } from '@angular/core';
import { CoursesListItem } from './courses-list-item.model';
import { CoursesListItemImpl } from './courses-list-item-impl';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
  }

  public getCoursesItems(): CoursesListItem[] {
    return [
      new CoursesListItemImpl(1,
        'Video Course #1',
        new Date(2018, 4, 29),
        '28',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
      new CoursesListItemImpl(
        2,
        'Video Course #2',
        new Date(2018, 5, 10),
        '27',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
      new CoursesListItemImpl(
        3,
        'Video Course #3',
        new Date(2018, 6, 14),
        '10',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
      new CoursesListItemImpl(
        4,
        'Video Course #4',
        new Date(2018, 6, 16),
        '46',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
      new CoursesListItemImpl(
        5,
        'Video Course #5',
        new Date(2018, 7, 21),
        '30',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
    ];
  }
}
