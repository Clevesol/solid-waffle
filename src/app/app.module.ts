import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CustomersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    BreadcrumbModule,
    SlideMenuModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    CardModule,
    FieldsetModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
