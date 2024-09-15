import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from '../auth/forget-password/forget-password.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // loadChildren: () => import('../auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    component: RegisterComponent,
    // loadChildren: () => import('../auth/register/register.component').then((c) => c.RegisterComponent),
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    // loadChildren: () => import('../auth/forget-password/forget-password.component').then((c) => c.ForgetPasswordComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
