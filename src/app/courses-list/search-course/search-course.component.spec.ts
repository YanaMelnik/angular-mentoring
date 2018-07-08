import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponent } from './search-course.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchCourseComponent', () => {
  let sut: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(console, 'log').and.callThrough();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('#search', () => {
    it('should search courses when user click search button', () => {
      sut.searchCourse = 'Video 1';
      const searchButton = fixture.debugElement.query(By.css('.btn-course_search'));
      searchButton.triggerEventHandler('click', null);

      expect(console.log).toHaveBeenCalledWith(sut.searchCourse);
    });
  });
});
