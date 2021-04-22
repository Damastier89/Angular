import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainValidator } from './main-validator';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MainValidator.restrictedEmail
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  public get skillsControl(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public submit(): void {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = {...this.form.value}

      console.log('Form Data:', formData)

      this.form.reset()
    }
  }

  public setCapital(): void {
    const cityMap : any = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }

    const cityKey = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]

    this.form.patchValue({
      address: {city: city}
    })
  }

  public addSkill(): void{
    const control: any = new FormControl('', Validators.required);
    /* (<FormArray>this.form.get('skills'))?.push(control) */
    (this.form.get('skills') as FormArray).push(control)
  }

}
