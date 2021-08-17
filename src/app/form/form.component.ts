import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employeeForm = new FormGroup({
    employeeName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    employeeAddress: new FormControl('', [Validators.required, Validators.minLength(15)]),
    employeePhoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
    employeeDob: new FormControl('', [Validators.required]),
    employeeEmail: new FormControl('', [Validators.required, Validators.email])
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.clear();
    alert("Please check Console");
    console.log(this.employeeForm.value);
  }

}
