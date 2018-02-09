import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ApiService} from "./api-service.service";
import {BunnyService} from "./bunny-service.service";
import {HttpClientModule} from "@angular/common/http";

import {
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [BunnyService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
