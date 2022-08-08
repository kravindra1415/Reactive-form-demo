import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  //styles: [`h1 { font-family: Lato; }`],
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  //@Input() name: string;
  //----------------using form control------------------

  //name = new FormControl('');
  //----------------------------------------------------

  // using Form Group
  //----------------------------------------------------
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipcode: new FormControl(''),
    }),
    mobile: new FormControl(''),
  });
  //------------------------------------------------------

  // constructor(private fb: FormBuilder) {}

  // //using FormBuilder
  // customerForm = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zipcode: [],
  //   }),
  //   mobile: [''],
  // });

  saveCustomer() {
    console.log(this.customerForm.value);
  }
}
