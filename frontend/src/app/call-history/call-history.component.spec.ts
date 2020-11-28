import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CallHistoryComponent} from './call-history.component';
import {CallsStoreService} from "../state/calls-store.service";
import {provideStoreServiceMock} from "@ngxp/store-service/testing";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatListModule} from "@angular/material/list";
import {Component, Input} from "@angular/core";
import {Call} from "../state/calls.model";

@Component({
  selector: 'pound-call-list',
  template: '<p>call history</p>'
})
class MockCallList {
  @Input()
  calls: Call[];
}

describe('CallTableComponent', () => {
  let component: CallHistoryComponent;
  let fixture: ComponentFixture<CallHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CallHistoryComponent, MockCallList],
      imports: [
        MatListModule,
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
