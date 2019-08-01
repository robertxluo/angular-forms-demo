import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from '../models/customer';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor() {}

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  save() {
    console.log(this.customerForm);
    console.log(`Saved: ${JSON.stringify(this.customerForm.value)}`);
  }
}
