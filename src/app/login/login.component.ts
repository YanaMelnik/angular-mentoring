import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../core/decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@AutoUnsubscribe()
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.sub = this.authService.login(this.username, this.password)
      .subscribe(
        (res: boolean) => {
          res
          ? this.router.navigate(['/courses'])
          : console.log( new Error('Sorry, this user is not registered'));
        }
      );
  }
}
