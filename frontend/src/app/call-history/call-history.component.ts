import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Call} from "../../../src-gen";
import {CallsStoreService} from "../state/calls-store.service";
import {NGXLogger} from "ngx-logger";
import {first} from "rxjs/operators";

@Component({
  selector: 'pound-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
  host: {
    '[class.pound-call-history]': 'true'
  }
})
export class CallHistoryComponent implements OnInit {
  readonly displayedColumns = ['number', 'date', 'duration'];

  readonly calls: Observable<Call[]>;

  loaded: boolean = false;

  constructor(
      private callsStore: CallsStoreService,
      private logger: NGXLogger) {
    this.calls = callsStore.allCalls();
    this.callsStore.callsLoaded$
        .pipe(first())
        .subscribe(() => {
              this.loaded = true;
            }
        );
  }

  ngOnInit() {
    this.callsStore.loadCalls();
  }

  relevantNumber(call: Call): string {
    if (call.direction === 'OUTGOING') {
      return call.dst;
    } else {
      return call.src;
    }
  }
}
