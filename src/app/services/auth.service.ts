import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userLoggedIn = false;

  constructor(private userService: UserService) { }

  public login(login: string, password: string): Observable<boolean> {
    return this.userService.logIn(login, password)
      .pipe(
        tap((res: any) => localStorage.setItem('userToken', res.token)),
        map((res) => true),
        catchError((err) => of(false))
      );
  }

  public logout(): Observable<object> {
    const userToken = localStorage.getItem('userToken');
    localStorage.removeItem('userToken');
    return this.userService.logOut(userToken);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('userToken');
  }

  public getUserInfo(): Observable<object>  {
    // TODO: I'm created method but I don't know where I can use it
    return this.userService.getUserInfo();
  }
}
