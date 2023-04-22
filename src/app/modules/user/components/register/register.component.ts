import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public errorMessage: string = '';
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
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  register(): void {
    this.auth
      .register({
        username: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
      })
      .subscribe(
        (response) => {
          this.router.navigate(['/products']);

          this.toastr.success('You registered successfully.', '');
        },
        (error) => {
          if (error.status === 400) {
            this.errorMessage = 'Email already taken.';
            this.registerForm.reset();
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
            this.registerForm.reset();
          }
        }
      );
  }
}
