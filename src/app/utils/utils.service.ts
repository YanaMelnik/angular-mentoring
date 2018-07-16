import { Injectable } from '@angular/core';
import { CoursesListItemModel } from '../courses-list/models/courses-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public parseDateString(item: CoursesListItemModel): number {
    return Date.parse(item.creationDate.toString());
  }
}
