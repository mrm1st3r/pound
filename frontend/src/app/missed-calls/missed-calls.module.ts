import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissedCallsComponent } from './missed-calls.component';
import {MissedCallsStoreService} from "./state/missed-calls-store.service";
import {MatListModule} from "@angular/material/list";
import {MomentModule} from "ngx-moment";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [MissedCallsComponent],
  exports: [
    MissedCallsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MomentModule
  ],
  providers: [
      MissedCallsStoreService
  ]
})
export class MissedCallsModule { }
