import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public username: string;
  public password: string;
  private userLogInSubscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.userLogInSubscription = this.authService.login(this.username, this.password)
      .subscribe(
        (res: boolean) => {
          res
          ? this.router.navigate(['/courses'])
          : console.log( new Error('Sorry, this user is not registered'));
        }
      );
  }

  ngOnDestroy() {
    this.userLogInSubscription.unsubscribe();
  }
}
