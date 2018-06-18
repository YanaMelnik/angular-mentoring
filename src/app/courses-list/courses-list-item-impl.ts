import { CoursesListItem } from './courses-list-item.model';

export class CoursesListItemImpl implements CoursesListItem {
  creation_date: Date;

  description: string;
  duration: string;
  id: number;
  title: string;

  constructor (
    id: number,
    title: string,
    creation_date: Date,
    duration: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.creation_date = creation_date;
    this.duration = duration + ' min';
    this.description = description;
  }

}
