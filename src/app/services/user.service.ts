import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public logIn(login: string, password: string): Observable<object> {
    const params = {
      login,
      password
    };

    return this.http.post('/api/auth/login', params);
  }

  public logOut(userToken: string): Observable<object> {
    return this.http.post('/api/auth/logout', {userToken});
  }

  public getUserInfo(): Observable<object> {
    return this.http.get('api/auth/user');
  }
}
