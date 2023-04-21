import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: FormGroup<any> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
        ),
      ],
    ],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z -]*$/)]],
  });
  constructor(private fb: FormBuilder) {}

  public register(): void {
    console.log('registering');
  }
}
