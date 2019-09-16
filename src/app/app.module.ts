import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadLineComponent } from './components/head-line/head-line.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { MenuComponent } from './components/menu/menu.component';
import {ScreenService} from './services/screen-service/screen.service';
import {ScreenLargeDirective} from './directieves/screen-large.directiev';
import {ScreenSmallDirective} from './directieves/screen-small.directive';
import {ScreenMiddleDirective} from './directieves/screen-middle.directive';
import { GaleryComponent } from './components/galery/galery.component';
import {HttpClientModule} from '@angular/common/http';
import { WhyComponent } from './components/why/why.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParkComponent } from './park/park.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadLineComponent,
    AppHomeComponent,
    MenuComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    ScreenMiddleDirective,
    GaleryComponent,
    WhyComponent,
    CalculateComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularDateTimePickerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule

  ],
  providers: [ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
