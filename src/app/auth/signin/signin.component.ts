import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinForm!: FormGroup;
  light: boolean = true;
  hide: boolean = true;

  constructor() {
    console.log('Sign In');
  }

  togglePassowrd() {
    this.hide = !this.hide;
  }

  handleThemeMode() {
    this.light = !this.light;
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    });
  }

  handleSignIn() {
    console.log('SignIn: ', this.signinForm);
    if (this.signinForm.valid) {
      LocalStorageService.set('signin', this.signinForm.value);
    }
  }
}
