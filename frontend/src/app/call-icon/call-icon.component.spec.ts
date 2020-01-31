import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallIconComponent } from './call-icon.component';
import {MatIconModule} from "@angular/material/icon";

describe('CallIconComponent', () => {
  let component: CallIconComponent;
  let fixture: ComponentFixture<CallIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallIconComponent ],
      imports: [
          MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallIconComponent);
    component = fixture.componentInstance;
    component.call = {
      direction: 'OUTGOING',
      disposition: 'ANSWERED',
      calldate: '',
      dst: '123',
      src: '456',
      duration: 2
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
