import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';
import { parseDateString } from '../../common/utils/utils';

@Pipe({
  name: 'orderByCourseDate'
})
export class OrderByCourseDatePipe implements PipeTransform {

  constructor() {}

  transform(items: CoursesListItemModel[]): CoursesListItemModel[] {
    return items.sort((firstItem, secondItem) => {
        return parseDateString(secondItem) - parseDateString(firstItem);
      });
  }
}
