import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';

describe('LoginComponent', () => {
  let sut: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authService: AuthService = new AuthService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ LoginComponent ],
      providers: [
          { provide: AuthService, useValue: authService }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('#login', () => {
    let storesInfo: Object;
    beforeEach(async(() => {
      sut.username = 'test_username';
      sut.password = 'test_password';

      storesInfo = {
        name: 'test_name',
        lastName: 'test_lastName',
        token: 'test_token',
      };

      spyOn(authService, 'login').and.returnValue(storesInfo);

      sut.login();
    }));
    it('should log in user if user credential exist in base', () => {
      expect(authService.login).toHaveBeenCalledWith(sut.username, sut.password);
    });
  });
});
