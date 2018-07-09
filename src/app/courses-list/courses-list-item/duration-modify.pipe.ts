import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationModify'
})
export class DurationModifyPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const minute = 'min';
    const hour = 'h';
    const oneHour = 60;
    const minutes = value % oneHour;

    const hours = value > oneHour ? (value - minutes) / oneHour : '';

    return hours ? `${hours}${hour} ${minutes}${minute}` : `${minutes}${minute}`;
  }

}
