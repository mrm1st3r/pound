import { BASE_PATH as backendUrl } from './../../src-gen/variables';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Logger
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
// Our Modules
import { AppComponent } from './app.component';
import { ApiModule } from '../../src-gen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {CallsStoreService} from "./state/calls-store.service";


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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CallsEffects])
  ],
  providers: [
      CallsStoreService,
    { provide: backendUrl, useValue: 'http://localhost:8080' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
