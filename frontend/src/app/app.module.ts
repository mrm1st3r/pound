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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {ActionReducer, StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {CallsStoreService} from "./state/calls-store.service";
import {environment} from "../environments/environment";
import {MomentModule} from "ngx-moment";
import {AppState} from "./app.state";
import { CallIconComponent } from './call-icon/call-icon.component';
import { HeaderComponent } from './header/header.component';
import { CallHistoryComponent } from './call-history/call-history.component';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

const metaReducers = [logger];

@NgModule({
  declarations: [
    AppComponent,
    CallIconComponent,
    HeaderComponent,
    CallHistoryComponent
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
