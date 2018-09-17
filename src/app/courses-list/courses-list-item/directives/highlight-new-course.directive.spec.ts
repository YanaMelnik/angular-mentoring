import { HighlightNewCourseDirective } from './highlight-new-course.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
      <div [appHighlightNewCourse]="dateToday">Green</div>
      <div [appHighlightNewCourse]="dateOneWeekAgo">Green</div>
      <div [appHighlightNewCourse]="dateInFuture">Blue</div>
      <div [appHighlightNewCourse]="dateOneMonthAgo">No Highlight</div>`
})
class TestHostComponent {
  todayYear = new Date().getFullYear();
  todayMonth = new Date().getMonth();
  todayDay = new Date().getDate();

  dateToday = new Date().toString();
  dateOneWeekAgo = new Date(this.todayYear, this.todayMonth, (this.todayDay - 7)).toString();
  dateOneMonthAgo = new Date(this.todayYear, (this.todayMonth - 1), this.todayDay).toString();
  dateInFuture = new Date((this.todayYear + 1), this.todayMonth, this.todayDay).toString();
}

describe('HighlightNewCourseDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let des;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightNewCourseDirective, TestHostComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(HighlightNewCourseDirective));
  });

  it('should has green border in courses item, if current date is today', () => {
      const borderColor = des[0].nativeElement.style.borderColor;
      expect(borderColor).toBe('green');
  });

  it('should has green border in courses item, if current date is one week ago', () => {
      const borderColor = des[1].nativeElement.style.borderColor;
      expect(borderColor).toBe('green');
  });

  it('should has blue border in courses item, if current date is in a future', () => {
      const borderColor = des[2].nativeElement.style.borderColor;
      expect(borderColor).toBe('blue');
  });

  it('should has not border in courses item, if current date is more than two week ago', () => {
    const borderColor = des[3].nativeElement.style.borderColor;
    expect(borderColor).toBe('');
  });
});
