import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CallsStoreService} from "../state/calls-store.service";
import {NGXLogger} from "ngx-logger";
import {first} from "rxjs/operators";
import {Call} from "../state/calls.model";

@Component({
  selector: 'pound-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
  host: {
    '[class.pound-call-history]': 'true'
  }
})
export class CallHistoryComponent implements OnInit {

  readonly calls$: Observable<Call[]>;

  loaded: boolean = false;

  constructor(
      private callsStore: CallsStoreService,
      private logger: NGXLogger) {
    this.calls$ = callsStore.selectCallHistory();
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
}
