import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FrequentNumbersComponent } from './frequent-numbers.component';
import {MomentModule} from "ngx-moment";
import {provideStoreServiceMock} from "@ngxp/store-service/testing";
import {CallStatisticsStoreService} from "../state/call-statistics-store.service";
import {MatListModule} from "@angular/material/list";

describe('FrequentNumbersComponent', () => {
  let component: FrequentNumbersComponent;
  let fixture: ComponentFixture<FrequentNumbersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule,
        MatListModule
      ],
      providers: [
        provideStoreServiceMock(CallStatisticsStoreService)
      ],
      declarations: [ FrequentNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
