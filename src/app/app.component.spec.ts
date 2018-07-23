import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from './core/services/auth.service';

describe('AppComponent', () => {
  let sut: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const authService: AuthService = new AuthService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: AuthService, useValue: authService }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    sut = fixture.componentInstance;
  });
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

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
