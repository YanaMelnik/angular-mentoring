import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getUserToken();
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
