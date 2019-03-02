import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';
import { SERVICE_MOCKS } from '../mocks';
import {CallsStoreService} from "./state/calls-store.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {MatTableModule, MatToolbarModule} from "@angular/material";
import {MomentModule} from "ngx-moment";
import {CallIconComponent} from "./call-icon/call-icon.component";

describe('AppComponent', () => {

  let fixture, component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([CallsEffects]),
        MatTableModule,
        MatToolbarModule,
        MomentModule,
      ],
      declarations: [
        AppComponent,
        CallIconComponent,
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

  it(`should have as title 'Pound'`, async(() => {
    expect(component.title).toEqual('Pound');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar span').textContent).toContain('Pound');
  }));
});
