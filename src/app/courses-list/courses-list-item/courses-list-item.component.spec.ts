import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem } from '../models/courses-list-item.model';

describe('CoursesListItemComponent', () => {
  let sut: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    sut = fixture.componentInstance;
    sut.coursesItem = new CoursesListItem(1,
      'Video Course #1',
      new Date(2018, 5, 10),
      28,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
