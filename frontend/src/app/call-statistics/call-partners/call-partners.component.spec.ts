import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPartnersComponent } from './call-partners.component';
import {MomentModule} from "ngx-moment";

describe('CallPartnersComponent', () => {
  let component: CallPartnersComponent;
  let fixture: ComponentFixture<CallPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule
      ],
      declarations: [ CallPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
