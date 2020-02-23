import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {AppComponent} from './app.component';
import {SERVICE_MOCKS} from '../mocks';
import {CallsStoreService} from "./state/calls-store.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state/calls.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CallsEffects} from "./state/calls.effects";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from "./header/header.component";
import {Component} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'pound-call-history',
  template: '<p>call history</p>'
})
class MockCallHistory {

}

@Component({
  selector: 'pound-total-call-duration',
  template: '<p>call history</p>'
})
class MockDuration {

}

@Component({
  selector: 'pound-frequent-numbers',
  template: '<p>call history</p>'
})
class MockFrequentNumbers {

}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([CallsEffects]),
        MatToolbarModule,
        MatGridListModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MockCallHistory,
        MockDuration,
        MockFrequentNumbers
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
