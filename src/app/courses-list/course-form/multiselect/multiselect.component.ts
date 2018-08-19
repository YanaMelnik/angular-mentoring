import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { fieldHasError } from '../../../common/utils/utils';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() public form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  isFieldInvalid(formControl: AbstractControl): boolean {
    return fieldHasError(formControl);
  }
}
