import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentNumbersComponent } from './frequent-numbers.component';
import {MomentModule} from "ngx-moment";

describe('FrequentNumbersComponent', () => {
  let component: FrequentNumbersComponent;
  let fixture: ComponentFixture<FrequentNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule
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
