import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalCallDurationComponent} from './total-call-duration.component';
import {MomentModule} from "ngx-moment";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {provideStoreServiceMock} from "@ngxp/store-service/testing";
import {CallStatisticsStoreService} from "../state/call-statistics-store.service";

describe('TotalCallDurationComponent', () => {
  let component: TotalCallDurationComponent;
  let fixture: ComponentFixture<TotalCallDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          MomentModule,
          MatListModule,
          MatIconModule
      ],
      providers: [
        provideStoreServiceMock(CallStatisticsStoreService)
      ],
      declarations: [ TotalCallDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCallDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
