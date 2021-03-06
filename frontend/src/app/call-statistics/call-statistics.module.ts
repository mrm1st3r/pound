import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TotalCallDurationComponent} from './total-call-duration/total-call-duration.component';
import {CallStatisticsStoreService} from "./state/call-statistics-store.service";
import {MomentModule} from "ngx-moment";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {FrequentNumbersComponent} from './frequent-numbers/frequent-numbers.component';


@NgModule({
  declarations: [
    TotalCallDurationComponent,
    FrequentNumbersComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    CallStatisticsStoreService
  ],
  exports: [
    TotalCallDurationComponent,
    FrequentNumbersComponent
  ]
})
export class CallStatisticsModule { }
