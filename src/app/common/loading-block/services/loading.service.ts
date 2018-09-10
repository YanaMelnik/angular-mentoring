import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loader = new Subject<boolean>();

  constructor() {

  }

  shouldDisplay() {
    return this.loader;
  }

  hideOverlay() {
    this.loader.next(false);
  }

  showOverlay() {
    this.loader.next(true);
  }
}
