import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CallListComponent } from './call-list.component';
import {MatListModule} from "@angular/material/list";

describe('CallListComponent', () => {
  let component: CallListComponent;
  let fixture: ComponentFixture<CallListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CallListComponent ],
      imports: [
        MatListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
