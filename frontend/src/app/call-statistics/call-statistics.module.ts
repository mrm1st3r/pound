import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TotalCallDurationComponent} from './total-call-duration/total-call-duration.component';
import {CallStatisticsStoreService} from "./state/call-statistics-store.service";
import {MomentModule} from "ngx-moment";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CallPartnersComponent} from './call-partners/call-partners.component';


@NgModule({
  declarations: [
    TotalCallDurationComponent,
    CallPartnersComponent
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
    CallPartnersComponent
  ]
})
export class CallStatisticsModule { }
