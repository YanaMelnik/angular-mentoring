import { UnitsService } from '../../services/units.service';

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
    this.id = id;
    this.title = title;
    this.creationDate = UnitsService.getDateString(creationDate);
    this.duration = UnitsService.getTimeString(duration);
    this.description = description;
  }
}

