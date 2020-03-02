import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MissedCallsStoreService} from "./state/missed-calls-store.service";
import {Observable} from "rxjs";
import {Call} from "../state/calls.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'pound-missed-calls',
  templateUrl: './missed-calls.component.html',
  styleUrls: ['./missed-calls.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissedCallsComponent implements OnInit {

  public calls$: Observable<Call[]>;
  public heading$: Observable<number | string>;

  constructor(
      private readonly store: MissedCallsStoreService
  ) { }

  ngOnInit(): void {
    this.calls$ = this.store.selectMissedCalls('');
    this.heading$ = this.store.selectMissedCallsCount().pipe(
        map(n => n > 0 ? n : 'No'),
        map(n => n + ' ' + (n === 1 ? 'Missed Call' : 'Missed Calls'))
    );

//    const sinceDate = moment('2020');
    console.log()
  }

}
