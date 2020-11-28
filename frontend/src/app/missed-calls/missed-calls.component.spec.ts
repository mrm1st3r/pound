import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MissedCallsComponent } from './missed-calls.component';
import {provideStoreServiceMock} from "@ngxp/store-service/testing";
import {MissedCallsStoreService} from "./state/missed-calls-store.service";
import {Component, Input} from "@angular/core";
import {Call} from "../state/calls.model";

@Component({
  selector: 'pound-call-list',
  template: 'call-list'
})
class MockCallListComponent {
  @Input()
  calls: Call[];
}

describe('MissedCallsComponent', () => {
  let component: MissedCallsComponent;
  let fixture: ComponentFixture<MissedCallsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedCallsComponent, MockCallListComponent ],
      imports: [

      ],
      providers: [
          provideStoreServiceMock(MissedCallsStoreService)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
