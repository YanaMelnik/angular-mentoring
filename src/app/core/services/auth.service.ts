import { Injectable } from '@angular/core';
import { UserEntityModel } from '../header/user-entity/user-entity.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginBase: UserEntityModel[] = [
    {
      firstName: 'Ivan',
      lastName: 'Pupkin',
      login: 'admin',
      password: 'admin',
      token: '1234567890'
    },
    {
      firstName: 'Petro',
      lastName: 'Supkin',
      login: 'root',
      password: 'root',
      token: '7890123456'
    }
  ];
  public userLoggedIn = false;

  constructor() { }

  public login(login: string, password: string): void {
    const result: UserEntityModel[] = this.loginBase.filter((elem) => {
      return elem.login === login && elem.password === password;
    });

    if (result.length !== 0) {
      const {password, ...loginInfo} = result[0];
      this.userLoggedIn = true;
      localStorage.setItem('logInUser', JSON.stringify(loginInfo));
      return;
    }
    throw new Error('Sorry, this user is not registered');
  }

  public logout(): void {
    this.userLoggedIn = false;
    localStorage.removeItem('logInUser');
  }

  public isAuthenticated(): boolean {
    return this.userLoggedIn;
  }

  public getUserInfo(): object {
    const userString = localStorage.getItem('logInUser');
    return JSON.parse(userString);
  }
}
