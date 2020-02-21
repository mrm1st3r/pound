import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalCallDurationComponent } from './total-call-duration/total-call-duration.component';



@NgModule({
  declarations: [TotalCallDurationComponent],
  imports: [
    CommonModule
  ]
})
export class CallStatisticsModule { }
