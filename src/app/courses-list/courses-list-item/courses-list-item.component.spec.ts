import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem } from '../models/courses-list-item.model';
import { HighlightNewCourseDirective } from './highlight-new-course.directive';
import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationModifyPipe } from './duration-modify.pipe';
import { By } from '@angular/platform-browser';

describe('CoursesListItemComponent', () => {
  let sut: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let courseItem: ElementRef;
  let borderColor: string;
  let todayYear: number;
  let todayDay: number;
  let todayMonth: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, HighlightNewCourseDirective, DurationModifyPipe ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    sut = fixture.componentInstance;
    sut.coursesItem = new CoursesListItem(1,
      'Video Course #1',
      new Date(2018, 5, 10),
      true,
      28,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    fixture.detectChanges();

    courseItem = fixture.debugElement.query(By.css('.course-item'));
    borderColor = courseItem.nativeElement.style.borderColor;
    todayYear = + new Date().getFullYear();
    todayMonth = + new Date().getMonth();
    todayDay = + new Date().getDate();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  // TODO: Do we need test directive behavior in component?
  // it('should show green border if course started not later then two weeks ago', () => {
  //   sut.coursesItem.creationDate = new Date(todayYear, todayMonth, (todayDay - 2));
  //   expect(borderColor).toBe('green');
  // });
  //
  // it('should show green border if course started today', () => {
  //   sut.coursesItem.creationDate = new Date(todayYear, todayMonth, todayDay);
  //   expect(borderColor).toBe('green');
  // });
  //
  // it('should show blue border if course will be start in a future', () => {
  //   sut.coursesItem.creationDate = new Date((todayYear + 1), 8, 10);
  //   expect(borderColor).toBe('blue');
  // });
  // it('should not show any border if course started more than 2 weeks ago', () => {
  //   sut.coursesItem.creationDate = new Date(todayYear, 7, 10);
  //   expect(borderColor).toBe('');
  // });
});
