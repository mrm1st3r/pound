import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MissedCallsComponent} from './missed-calls.component';
import {MissedCallsStoreService} from "./state/missed-calls-store.service";
import {CallListModule} from "../call-list/call-list.module";


@NgModule({
  declarations: [MissedCallsComponent],
  exports: [
    MissedCallsComponent
  ],
  imports: [
    CommonModule,
    CallListModule
  ],
  providers: [
      MissedCallsStoreService
  ]
})
export class MissedCallsModule { }
