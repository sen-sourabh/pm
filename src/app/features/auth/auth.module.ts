import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ForgetPasswordComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
