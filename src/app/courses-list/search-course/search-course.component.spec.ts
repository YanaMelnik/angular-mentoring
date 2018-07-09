import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponent } from './search-course.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-search-course
      [(searchCourse)] = searchCourse
      (searchCourses)="onSearchCourse($event)">
    </app-search-course>`
})
class TestHostComponent {
  public searchCourse = 'video';
  public searchCourses: string;
  public onSearchCourse(courseName: string) { this.searchCourses = courseName; }
}


describe('SearchCourseComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseComponent, TestHostComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('#searchCourse', () => {
    it('should search courses when user click search button', () => {
      const searchName = 'video';
      const searchButton = fixture.debugElement.query(By.css('.btn-course_search'));
      searchButton.triggerEventHandler('click', null);

      expect(testHost.searchCourses).toEqual(searchName);
    });
  });
});
