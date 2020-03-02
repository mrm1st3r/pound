import {NgModule} from "@angular/core";
import {CallHistoryComponent} from "./call-history.component";
import {CommonModule} from "@angular/common";
import {CallListModule} from "../call-list/call-list.module";

@NgModule({
  declarations: [CallHistoryComponent],
  imports: [
    CommonModule,
    CallListModule
  ],
  exports: [
      CallHistoryComponent
  ]
})
export class CallHistoryModule {
}
