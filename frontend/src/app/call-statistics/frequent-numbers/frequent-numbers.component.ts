import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CallStatisticsStoreService} from "../state/call-statistics-store.service";
import {FrequentlyCalledNumber} from "../state/call-statistics.model";

@Component({
  selector: 'pound-frequent-numbers',
  templateUrl: './frequent-numbers.component.html',
  styleUrls: ['./frequent-numbers.component.scss']
})
export class FrequentNumbersComponent implements OnInit {

  public calls$: Observable<FrequentlyCalledNumber[]>;

  constructor(private callsStatisticsStore: CallStatisticsStoreService) { }

  ngOnInit(): void {
    this.calls$ = this.callsStatisticsStore.selectFrequentNumbers();
  }

}
