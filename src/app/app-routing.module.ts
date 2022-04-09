import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:'',component: HomeComponent, pathMatch: 'prefix', canActivate:[AuthGuardGuard]},
  {path:'login',component: LoginComponent, pathMatch: 'full'},
  {path:'logout',component: LogoutComponent, pathMatch: 'full'},
  {path:'mobile',component: MobileComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
