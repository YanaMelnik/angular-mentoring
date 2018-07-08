import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-courses-list-item [coursesItem]="item"
                           (deleteCourse)="onDeleteCourse($event)">
    </app-courses-list-item>`
})
class TestHostComponent {
  public item: CoursesListItemModel = new CoursesListItem(1,
    'Video Course #1',
    new Date(2018, 5, 10),
    28,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
  public deletedItemId: number;
  public onDeleteCourse(currentItemId: number) { this.deletedItemId = currentItemId; }
}

describe('CoursesListItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('#delete', () => {
    it('should delete course when user press delete button', () => {
      const deletedCourse = new CoursesListItem(1,
        'Video Course #1',
        new Date(2018, 5, 10),
        28,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

      const deleteButton = fixture.debugElement.query(By.css('.btn-course_delete'));
      deleteButton.triggerEventHandler('click', null);

      expect(testHost.deletedItemId).toEqual(deletedCourse.id);
    });
  });
});
