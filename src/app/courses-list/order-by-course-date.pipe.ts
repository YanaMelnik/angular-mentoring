import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItemModel } from './models/courses-list-item.model';

@Pipe({
  name: 'orderByCourseDate'
})
export class OrderByCourseDatePipe implements PipeTransform {

  transform(items: CoursesListItemModel[]): CoursesListItemModel[] {
    return items
      ? items.sort((a, b) => {
        return Date.parse(b.creationDate.toString()) - Date.parse(a.creationDate.toString());
      })
      : items;
  }
}
