import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class IsNotAuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService) {

  }

  canActivate(): boolean {
    return !this.authService.isAuthenticated();
  }
}
