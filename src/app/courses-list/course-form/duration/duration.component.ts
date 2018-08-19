import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { fieldHasError } from '../../../common/utils/utils';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  @Input() public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isFieldInvalid(formControl: AbstractControl): boolean {
    return fieldHasError(formControl);
  }
}
