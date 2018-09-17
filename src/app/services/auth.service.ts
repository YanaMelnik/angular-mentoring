import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { UserInfoModel } from '../core/header/user-entity/user-entity.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userLoggedIn = false;
  public loginStatus = new Subject<boolean>();

  constructor(private userService: UserService) { }

  public login(login: string, password: string): Observable<boolean> {
    return this.userService.logIn(login, password)
      .pipe(
        tap((res: any) => localStorage.setItem('userToken', res.token)),
        tap(() => this.loginStatus.next(true)),
        map((res) => true),
        catchError((err) => of(false))
      );
  }

  public logout(): Observable<object> {
    const userToken = this.getUserToken();
    localStorage.removeItem('userToken');
    return this.userService.logOut(userToken)
      .pipe(
        tap(() => this.loginStatus.next(false))
      );
  }

  public getUserToken(): string {
    return localStorage.getItem('userToken');
  }

  public isAuthenticated(): Observable<boolean>  {
    return of(!!this.getUserToken());
  }

  public getUserInfo(): Observable<UserInfoModel>  {
    return this.userService.getUserInfo();
  }

  public listenForLoginChanges(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
}
