import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class IsNotAuthenticatedGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    const auth = this.authService.isAuthenticated();
    if (auth) {
      this.router.navigate(['/courses']);
    }
    return !auth;
  }
}
