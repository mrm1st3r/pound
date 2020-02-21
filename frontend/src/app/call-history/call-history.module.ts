import {NgModule} from "@angular/core";
import {CallHistoryComponent} from "./call-history.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MomentModule} from "ngx-moment";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CallHistoryComponent],
  imports: [
      CommonModule,
      MatListModule,
      MatIconModule,
      MatTooltipModule,
      MomentModule
  ],
  exports: [
      CallHistoryComponent
  ]
})
export class CallHistoryModule {
}
