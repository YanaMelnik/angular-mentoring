import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.css']
})
export class UserEntityComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
