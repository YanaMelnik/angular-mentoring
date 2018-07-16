import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login() {
    try {
      this.authService.login(this.username, this.password);
    } catch (err) {
      // обработка ошибки
    }
  }

}
