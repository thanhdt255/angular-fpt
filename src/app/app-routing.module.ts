import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginComponent } from './login/login.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"Home", component: HomeRegisterComponent},
  {path:"Register", component: RegisterComponent},
  {path:"Login", component: LoginComponent},
  {path:"Login-Success", component: LoginSuccessComponent},
  {path:"Regis-Success", component: RegisterSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
