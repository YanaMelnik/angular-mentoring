import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let sut: AuthServiceService;
  let result: object;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
    sut = new AuthServiceService();
    result = {
      login: 'admin',
      name: 'Ivan',
      lastName: 'Pupkin',
      token: '1234567890'
    };
  });

  it('should be created', inject([AuthServiceService], (service: AuthServiceService) => {
    expect(service).toBeTruthy();
  }));

  describe('#login', () => {
    let login: string;
    let password: string;

    beforeEach(() => {
      login = 'admin';
      password = 'admin';
      spyOn(localStorage, 'setItem');
    });

    it('should set user information in localStorage if user credential extend in base', () => {
      sut.login(login, password);
      expect(localStorage.setItem).toHaveBeenCalledWith('logInUser', JSON.stringify(result));
    });

    it('should set authentication flag if user credential extend in base', () => {
      expect(sut.userLoggedIn).toBe(false);
      sut.login(login, password);
      expect(sut.userLoggedIn).toBe(true);
    });
  });

  describe('#logout', () => {
   beforeEach(() => {
      sut.userLoggedIn = false;
      spyOn(localStorage, 'removeItem');
    });

    it('should delete user information when user logout', () => {
      sut.logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('logInUser');
    });

    it('should set authentication flag in false when user logout', () => {
      sut.logout();
      expect(sut.userLoggedIn).toBe(false);
    });
  });

  describe('#isAuthenticated', () => {
    it('should return false authentication flag', () => {
      sut.userLoggedIn = false;
      expect(sut.isAuthenticated()).toBe(false);
    });

    it('should return true authentication flag', () => {
      sut.userLoggedIn = true;
      expect(sut.isAuthenticated()).toBe(true);
    });
  });

  describe('#getUserInfo', () => {
   beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(result));
    });

    it('should return user information if user credential extend in base', () => {
      expect(sut.getUserInfo()).toEqual(result);
    });

    it('should get user info from localStorage', () => {
      sut.getUserInfo();
      expect(localStorage.getItem).toHaveBeenCalledWith('logInUser');
    });
  });
});
