import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { By } from '@angular/platform-browser';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByCourseDatePipe } from './pipes/order-by-course-date.pipe';
import { CoursesListItem } from './models/courses-list-item.model';
import { DurationModifyPipe } from './courses-list-item/pipes/duration-modify.pipe';
import { HighlightNewCourseDirective } from './courses-list-item/directives/highlight-new-course.directive';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

describe('CoursesListComponent', () => {
  let sut: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const coursesService: CoursesService = new CoursesService();
  let filterCoursesPipe: Partial<FilterCoursesPipe>;
  let courseItemTest: CoursesListItem;

  beforeEach(async(() => {
    courseItemTest =  new CoursesListItem(7,
      'Video Course #1',
      new Date(2018, 5, 10),
      true,
      28,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    spyOn(coursesService, 'getCoursesItems').and.returnValue([courseItemTest]);

    filterCoursesPipe = {transform: jasmine.createSpy('transform')};

    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent,
        FilterCoursesPipe,
        OrderByCourseDatePipe,
        CoursesListItemComponent,
        HighlightNewCourseDirective,
        DurationModifyPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
          {provide: CoursesService, useValue: coursesService},
          {provide: FilterCoursesPipe, useValue: filterCoursesPipe}
        ]
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

  describe('stand alone testing', () => {
    describe('#showMore', () => {
      it('should show more courses when user click showMore button', () => {
        const button = fixture.debugElement.query(By.css('.btn-course-list_more'));
        button.triggerEventHandler('click', null);

        expect(console.log).toHaveBeenCalledWith('Show more.');
      });
    });

    describe('#onDeleteCourse', () => {
      it('should delete course item when user click delete button', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        spyOn(coursesService, 'removeCoursesItem');
        const courseId = 7;
        const button = fixture.debugElement.query(By.css('.btn-course_delete'));
        button.triggerEventHandler('click', null);
        expect(coursesService.removeCoursesItem).toHaveBeenCalledWith(courseId);
      });
    });
  });
});
