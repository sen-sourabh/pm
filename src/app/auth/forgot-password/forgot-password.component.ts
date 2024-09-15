import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  fpForm!: FormGroup;
  light: boolean = true;
  hide: boolean = true;

  constructor() {
    console.log('Forgot Password');
  }

  togglePassowrd() {
    this.hide = !this.hide;
  }

  handleThemeMode() {
    this.light = !this.light;
  }

  ngOnInit() {
    this.fpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  handleFP() {
    console.log('Forgot Password: ', this.fpForm);
    LocalStorageService.set('forgotpassword', this.fpForm.value);
  }
}
