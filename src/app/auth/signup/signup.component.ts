import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { LoggerService } from '../../core/services/logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  light: boolean = true;
  hide: boolean = true;

  constructor() {
    LoggerService.log('Sign Up');
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(3),
      ]),
    });
  }

  togglePassowrd() {
    this.hide = !this.hide;
  }

  handleThemeMode() {
    this.light = !this.light;
  }

  handleSubmission() {
    console.log('SignUp: ', this.signupForm);
    LocalStorageService.set('signup', this.signupForm.value);
  }
}
