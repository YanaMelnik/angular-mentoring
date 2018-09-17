import { CoursesListItemModel } from '../../courses-list/models/courses-list-item.model';
import { AbstractControl } from '@angular/forms';

export function parseDateString(item: CoursesListItemModel): number {
  return Date.parse(item.creationDate.toString());
}

export function fieldHasError(formControl: AbstractControl) {
  return (formControl.touched
    || formControl.dirty)
    && !formControl.valid;
}
