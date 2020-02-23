import { Component, OnInit } from '@angular/core';
import {CallStatisticsStoreService} from "../state/call-statistics-store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'pound-total-call-duration',
  templateUrl: './total-call-duration.component.html',
  styleUrls: ['./total-call-duration.component.scss']
})
export class TotalCallDurationComponent implements OnInit {

  public outgoingDuration: Observable<number>;
  public incomingDuration: Observable<number>;
  public totalDuration: Observable<number>;

  constructor(
      private readonly callStatisticsStore: CallStatisticsStoreService
  ) { }

  ngOnInit(): void {
    this.outgoingDuration = this.callStatisticsStore.selectTotalOutgoingDuration();
    this.incomingDuration = this.callStatisticsStore.selectTotalIncomingDuration();
    this.totalDuration = this.callStatisticsStore.selectTotalDuration();
  }

}
