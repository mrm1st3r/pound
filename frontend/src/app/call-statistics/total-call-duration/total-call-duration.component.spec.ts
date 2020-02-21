import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCallDurationComponent } from './total-call-duration.component';

describe('TotalCallDurationComponent', () => {
  let component: TotalCallDurationComponent;
  let fixture: ComponentFixture<TotalCallDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
