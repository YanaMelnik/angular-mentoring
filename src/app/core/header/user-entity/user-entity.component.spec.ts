import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntityComponent } from './user-entity.component';
import { AuthServiceService } from '../../services/auth-service.service';

describe('UserEntityComponent', () => {
  let sut: UserEntityComponent;
  let fixture: ComponentFixture<UserEntityComponent>;
  const authService: AuthServiceService = new AuthServiceService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntityComponent ],
      providers: [
        { provide: AuthServiceService, useValue: authService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntityComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('logout', () => {
    it('should logged out user when click log out button', () => {
      spyOn(authService, 'logout');
      sut.logout();
      expect(authService.logout).toHaveBeenCalledWith();
    });
  });

  describe('#isAuthenticated', () => {
    it('should return false authentication flag if user is not logged', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(false);
      expect(sut.isAuthenticated()).toBe(false);
    });

    it('should return true authentication flag if user is not logged', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(sut.isAuthenticated()).toBe(true);
    });
  });
});
