import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UnitsService {

  constructor() {
  }

  static getTimeString(time: string): string {
    const oneHour = 60;
    const minutes = +time % oneHour;
    let hours;
    if (+time > oneHour) {
      hours = (+time - minutes) / oneHour;
    }

    if (hours) {
      return `${hours}h ${minutes}min`;
    } else {
      return `${minutes}min`;
    }
  }
}
