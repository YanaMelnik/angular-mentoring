import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';
import { UtilsService } from '../../utils/utils.service';

@Pipe({
  name: 'orderByCourseDate'
})
export class OrderByCourseDatePipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {}

  transform(items: CoursesListItemModel[]): CoursesListItemModel[] {
    return items.sort((firstItem, secondItem) => {
        return this.utilsService.parseDateString(secondItem) - this.utilsService.parseDateString(firstItem);
      });
  }
}
