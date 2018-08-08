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
    id?: number,
    title?: string,
    creationDate?: Date,
    topRates: boolean = false,
    duration?: number,
    description?: string
  ) {
    // const date = creationDate.getFullYear() + '-' + creationDate.getMonth() + '-' + creationDate.getDay();


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

