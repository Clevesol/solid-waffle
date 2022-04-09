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
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import { NewuserComponent } from './newuser/newuser.component';
import { DailybusinessComponent } from './dailybusiness/dailybusiness.component';
import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { PosComponent } from './pos/pos.component';


//calendar module
import {CalendarModule} from 'primeng/calendar';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ManualBusinessRecordModalComponent } from './utils/manual-business-record-modal/manual-business-record-modal.component';
import { BusinessRecordComponent } from './dailybusiness/business-record/business-record.component';
import { StylistsComponent } from './dailybusiness/stylists/stylists.component';
import { CustomersComponent } from './dailybusiness/customers/customers.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {KnobModule} from 'primeng/knob';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {ConfirmationService,MessageService} from 'primeng/api';
import { DailyOverviewComponent } from './dailybusiness/daily-overview/daily-overview.component'
import { AuthGuardGuard } from './auth-guard.guard';

import {ToastModule} from 'primeng/toast';
import { LogoutComponent } from './logout/logout.component';
import { MobileComponent } from './mobile/mobile.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CustomersComponent,
    LoginComponent,
    NewuserComponent,
    DailybusinessComponent,
    PosComponent,
    ManualBusinessRecordModalComponent,
    BusinessRecordComponent,
    StylistsComponent,
    DailyOverviewComponent,
    LogoutComponent,
    MobileComponent
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
    SplitButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    CardModule,
    FieldsetModule,
    DividerModule,
    ChartModule,
    FullCalendarModule,
    ScrollPanelModule,
    CalendarModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    TableModule,

    ToastModule,
    ConfirmPopupModule,
    KnobModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ChartModule, ConfirmationService,AuthGuardGuard,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
