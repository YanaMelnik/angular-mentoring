import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItemModel } from '../models/courses-list-item.model';

@Pipe({
  name: 'filterCourses',
  pure: false
})
export class FilterCoursesPipe implements PipeTransform {
  public filterCourses: CoursesListItemModel[];

  transform(allCourses: CoursesListItemModel[], courseName: string): any {
    return courseName
      ? this.filterCourses = allCourses.filter((item) => {
        return item.title.toLowerCase().indexOf(courseName.toLowerCase()) !== -1;
      })
      : allCourses;
  }

}
