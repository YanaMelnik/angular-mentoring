import { UnitsService } from '../../services/units.service';

export interface CoursesListItem {
  id: number;
  title: string;
  creationDate: Date;
  duration: string;
  description: string;
}

export class CoursesListItemImpl implements CoursesListItem {
  creationDate: Date;
  description: string;
  duration: string;
  id: number;
  title: string;

  constructor (
    id: number,
    title: string,
    creationDate: Date,
    duration: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = UnitsService.getTimeString(duration);
    this.description = description;
  }
}

