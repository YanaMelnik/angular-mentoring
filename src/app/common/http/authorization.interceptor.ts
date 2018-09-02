import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('userToken');
    if (authToken && !request.url.includes('/login')) {
      request = request.clone({
        setHeaders: {
          Authorization: authToken
        }
      });
    }

    return next.handle(request);
  }
}
