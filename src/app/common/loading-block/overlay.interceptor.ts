import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class OverlayInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showOverlay();
    return next.handle(req).pipe(
      finalize(() => this.loadingService.hideOverlay())
    );
  }
}
