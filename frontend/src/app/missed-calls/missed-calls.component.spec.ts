import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedCallsComponent } from './missed-calls.component';

describe('MissedCallsComponent', () => {
  let component: MissedCallsComponent;
  let fixture: ComponentFixture<MissedCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedCallsComponent ]
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
