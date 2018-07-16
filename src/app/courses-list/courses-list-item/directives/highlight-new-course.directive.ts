import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightNewCourse]'
})
export class HighlightNewCourseDirective implements OnInit {
  @Input('appHighlightNewCourse') courseStartDate: string;

  constructor(private el: ElementRef, private render: Renderer2) {

  }

  private highlight(color: string): void {
    this.render.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }

  ngOnInit(): void {
    const todayMs = new Date().getTime();
    const courseStartDateMs = Date.parse(this.courseStartDate);
    const twoWeek = 1209600000;

    if (courseStartDateMs < todayMs && courseStartDateMs >= (todayMs - twoWeek)) {
      this.highlight('green');
    }
    if (courseStartDateMs > todayMs) {
      this.highlight('blue');
    }
  }

}
