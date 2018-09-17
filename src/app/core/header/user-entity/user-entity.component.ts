import { Component, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.css']
})
export class UserEntityComponent implements OnInit, DoCheck, OnDestroy {
  private userLogOutSubscription;
  private userInfoSubscription;
  private userAuthSubscription;
  public firstName: string;
  public lastName: string;
  public userIsAuth: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.userAuthSubscription = this.authService.listenForLoginChanges()
    // TODO Can't understand how to implement it in different way without bugs
      .subscribe((res) => {
        this.userIsAuth = res;
        if (res) {
          this.getUserInfo();
        }
      });
  }

  ngDoCheck() {
  }

  getUserInfo() {
    this.userInfoSubscription = this.authService.getUserInfo()
      .subscribe(
        ({firstName, lastName}) => {
          this.firstName = firstName;
          this.lastName = lastName;
          return;
        }
      );
  }

  logout(): void {
    this.userLogOutSubscription = this.authService.logout()
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        });
  }

  public isAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    [
      this.userLogOutSubscription,
      this.userInfoSubscription,
      this.userAuthSubscription
    ]
      .filter(subscrip => !!subscrip)
      .forEach(item => item.unsubscribe());
  }
}
