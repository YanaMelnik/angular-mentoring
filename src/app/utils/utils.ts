import { CoursesListItemModel } from '../courses-list/models/courses-list-item.model';

export function parseDateString(item: CoursesListItemModel): number {
  return Date.parse(item.creationDate.toString());
}
