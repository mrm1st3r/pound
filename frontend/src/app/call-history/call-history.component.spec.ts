import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CallHistoryComponent} from './call-history.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CallsStoreService} from "../state/calls-store.service";
import {provideStoreServiceMock} from "@ngxp/store-service/testing";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CallTableComponent', () => {
  let component: CallHistoryComponent;
  let fixture: ComponentFixture<CallHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CallHistoryComponent],
      imports: [
        MatToolbarModule,
        HttpClientTestingModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
      ],
      providers: [
        provideStoreServiceMock(CallsStoreService)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
