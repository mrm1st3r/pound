import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CallsStoreService} from "../state/calls-store.service";
import {NGXLogger} from "ngx-logger";
import {first} from "rxjs/operators";
import {CallHistoryStoreService} from "./state/call-history-store.service";
import {CallHistoryEntry, isIncoming} from "./state/call-history.model";

@Component({
  selector: 'pound-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
  host: {
    '[class.pound-call-history]': 'true'
  }
})
export class CallHistoryComponent implements OnInit {

  readonly calls$: Observable<CallHistoryEntry[]>;

  loaded: boolean = false;

  constructor(
      private callsStore: CallsStoreService,
      private historyStore: CallHistoryStoreService,
      private logger: NGXLogger) {
    this.calls$ = historyStore.selectCallHistory();
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

  public icon(call: CallHistoryEntry): string {
    return determineCallIcon(isIncoming(call), call.answered)
  }

  public color(call: CallHistoryEntry): string {
    return call.answered ? 'answered' : 'no-answer';
  }
}

function determineCallIcon(incoming: boolean, answered: boolean): string {
  if (incoming && answered) {
    return 'call_received'
  } else if (incoming && !answered) {
    return 'call_missed';
  } else if (!incoming && answered) {
    return 'call_made'
  } else if (!incoming && !answered) {
    return 'call_missed_outgoing';
  } else {
    return 'phone'
  }
}
