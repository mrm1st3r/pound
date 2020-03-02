import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CallListComponent} from "./call-list.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MomentModule} from "ngx-moment";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    CallListComponent
  ],
  exports: [
    CallListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MomentModule
  ]
})
export class CallListModule {
}
