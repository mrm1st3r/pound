import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPartnersComponent } from './call-partners.component';

describe('CallPartnersComponent', () => {
  let component: CallPartnersComponent;
  let fixture: ComponentFixture<CallPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
