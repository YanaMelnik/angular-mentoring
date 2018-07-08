import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { By } from '@angular/platform-browser';

describe('CoursesListComponent', () => {
  let sut: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesService: Partial<CoursesService>;

  beforeEach(async(() => {
    coursesService = {getCoursesItems: jasmine.createSpy('getCoursesItems')};

    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: CoursesService, useValue: coursesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log').and.callThrough();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('test as a class', () => {
    describe('#showMore', () => {
      it('should show more courses when user click showMore button', () => {
        sut.showMore();
        expect(console.log).toHaveBeenCalledWith('Show more.');
      });
    });

    describe('#onDeleteCourse', () => {
      it('should delete course item when user click delete button', () => {
        const courseId = 7;
        sut.onDeleteCourse(courseId);
        expect(console.log).toHaveBeenCalledWith(courseId);
      });
    });

    describe('#ngOnInit', () => {
      it('should set courses item from server on init', () => {
        sut.ngOnInit();
        expect(coursesService.getCoursesItems).toHaveBeenCalledWith();
      });
    });
  });

  describe('stand alone testing', () => {
    describe('#showMore', () => {
      it('should show more courses when user click showMore button', () => {
        const button = fixture.debugElement.query(By.css('.btn-course-list_more'));
        button.triggerEventHandler('click', null);

        expect(console.log).toHaveBeenCalledWith('Show more.');
      });
    });

    // TODO: I can't do it like this because I didn't render child component with btn class?
    // describe('#onDeleteCourse', () => {
    //   it('should delete course item when user click delete button', () => {
    //     const courseId = 7;
    //     const button = fixture.debugElement.query(By.css('.btn-course_delete'));
    //     button.triggerEventHandler('click', null);
    //     expect(console.log).toHaveBeenCalledWith(courseId);
    //   });
    // });
  });
});
