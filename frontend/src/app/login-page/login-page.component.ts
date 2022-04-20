import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'mp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }


  onSubmit(e: any) {
    console.log(e);
  }

  getEmailErrorText() {
    const error = Object.keys(this.form.get('email')?.errors as Object)[0];
    return error === 'required' ? 'Поле обязательное' : 'E-mail введен неверно'
  }

  getPasswordErrorText() {
    const error = Object.keys(this.form.get('password')?.errors as Object)[0];
    return error === 'required'
      ? 'Поле обязательное'
      : `Длина пароля меньше ${(this.form.get('password')?.errors as ValidationErrors)['minlength']['requiredLength']} символов`
  }
}
