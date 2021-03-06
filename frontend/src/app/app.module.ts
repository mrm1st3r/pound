import {BASE_PATH as backendUrl} from './../../src-gen/variables';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Logger
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
// Our Modules
import {AppComponent} from './app.component';
import {ApiModule} from '../../src-gen';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ActionReducer, StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {CallsStoreService} from "./state/calls-store.service";
import {environment} from "../environments/environment";
import {AppState} from "./app.state";
import {HeaderComponent} from './header/header.component';
import {CallHistoryModule} from "./call-history/call-history.module";
import {CallStatisticsModule} from "./call-statistics/call-statistics.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MissedCallsModule} from "./missed-calls/missed-calls.module";
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';

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
    HeaderComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
        HttpClientModule,
        ApiModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatToolbarModule,
        MatButtonModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot([CallsEffects]),

        // App Features
        CallHistoryModule,
        CallStatisticsModule,
        MissedCallsModule,
    ],
  providers: [
      CallsStoreService,
    { provide: backendUrl, useValue: environment.backendUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
