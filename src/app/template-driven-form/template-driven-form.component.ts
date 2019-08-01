import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../models/customer';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit() {}

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log(`Saved: ${JSON.stringify(customerForm.value)}`);
  }
}
