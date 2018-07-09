import { getDateString, getTimeString } from '../../units.utils';

export interface CoursesListItemModel {
  id: number;
  title: string;
  creationDate: Date;
  topRates: boolean;
  duration: number;
  description: string;
}

export class CoursesListItem implements CoursesListItemModel {
  id: number;
  title: string;
  creationDate: Date;
  topRates: boolean;
  duration: number;
  description: string;

  constructor (
    id: number,
    title: string,
    creationDate: Date,
    topRates: boolean,
    duration: number,
    description: string
  ) {

    Object.assign(this, {
      id,
      title,
      topRates,
      description,
      creationDate,
      duration
    });
  }
}

