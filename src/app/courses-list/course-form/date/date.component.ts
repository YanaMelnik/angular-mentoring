import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { fieldHasError } from '../../../common/utils/utils';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isFieldInvalid(formControl: AbstractControl): boolean {
    return fieldHasError(formControl);
  }
}
