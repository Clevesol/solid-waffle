import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {path:'',component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuardGuard]},
  {path:'login',component: LoginComponent, pathMatch: 'full'},
  {path:'newuser',component: NewuserComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
