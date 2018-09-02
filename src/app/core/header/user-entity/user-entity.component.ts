import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.css']
})
export class UserEntityComponent implements OnInit, OnDestroy {
  private userLogOutSubscription;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout(): void {
    this.userLogOutSubscription = this.authService.logout()
      .subscribe(
        () => {
        this.router.navigate(['/login']);
      });
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    this.userLogOutSubscription.unsubscribe();
  }
}
