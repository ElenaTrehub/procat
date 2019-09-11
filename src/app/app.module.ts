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

@NgModule({
  declarations: [
    AppComponent,
    HeadLineComponent,
    AppHomeComponent,
    MenuComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    ScreenMiddleDirective,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
