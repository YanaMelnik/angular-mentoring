import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loginBase: any = [   // TODO Can't understand how to create complicate type
    {
      login: 'admin',
      password: 'admin',
      name: 'Ivan',
      lastName: 'Pupkin',
      token: '1234567890'
    },
    {
      login: 'root',
      password: 'root',
      name: 'Petro',
      lastName: 'Supkin',
      token: '7890123456'
    }
  ];
  public userLoggedIn = false;

  constructor() { }

  public login(login: string, password: string): void {
    const result: Array<any> = this.loginBase.filter((elem) => {
      return elem.login === login && elem.password === password;
    });  // TODO Can't understand how to create so complicated type

    if (result.length !== 0) {
      const loginInfo = {
        login: result[0].login,
        name: result[0].name,
        lastName: result[0].lastName,
        token: result[0].token
      };
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
