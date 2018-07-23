import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private authService: AuthService) { }

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
