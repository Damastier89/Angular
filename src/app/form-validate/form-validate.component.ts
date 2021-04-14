import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null)
    })
  }

  submit(){
    console.log(`form`, this.form)
    const formData = {...this.form.value}

    console.log(formData)
  }

}
