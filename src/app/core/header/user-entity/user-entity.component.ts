import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.css']
})
export class UserEntityComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
