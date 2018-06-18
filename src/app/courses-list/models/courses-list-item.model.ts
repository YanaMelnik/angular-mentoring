import { getDateString, getTimeString } from '../../units.utils';

export interface CoursesListItemModel {
  id: number;
  title: string;
  creationDate: string;
  duration: string;
  description: string;
}

export class CoursesListItem implements CoursesListItemModel {
  id: number;
  title: string;
  creationDate: string;
  duration: string;
  description: string;

  constructor (
    id: number,
    title: string,
    creationDate: Date,
    duration: number,
    description: string
  ) {

    Object.assign(this, {
      id,
      title,
      description,
      creationDate: getDateString(creationDate),
      duration: getTimeString(duration)
    });
  }
}

