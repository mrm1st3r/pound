import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {AppComponent} from './app.component';
import {SERVICE_MOCKS} from '../mocks';
import {CallsStoreService} from "./state/calls-store.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MomentModule} from "ngx-moment";
import {HeaderComponent} from "./header/header.component";
import {CallHistoryComponent} from "./call-history/call-history.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([CallsEffects]),
        MatTableModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MomentModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        CallHistoryComponent
      ],
      providers: [
          CallsStoreService,
        SERVICE_MOCKS,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar span').textContent).toContain('#pound');
  }));
});
