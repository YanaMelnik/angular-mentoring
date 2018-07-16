import { Component } from '@angular/core';
import { AuthServiceService } from './core/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthServiceService) { }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
