import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidateTokenComponent } from './validate-token/validate-token.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'validateToken', component: ValidateTokenComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule { }
