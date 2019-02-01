import {BASE_PATH as backendUrl} from './../../src-gen/variables';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Logger
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
// Our Modules
import {AppComponent} from './app.component';
import {ApiModule} from '../../src-gen';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {CallsStoreService} from "./state/calls-store.service";
import {storeLogger} from "ngrx-store-logger";
import {MomentModule} from "angular2-moment";
import {environment} from "../environments/environment";

export function logger(reducer) {
  return storeLogger()(reducer);
}

const metaReducers = [logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
    ApiModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MomentModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([CallsEffects])
  ],
  providers: [
      CallsStoreService,
    { provide: backendUrl, useValue: environment.backendUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
