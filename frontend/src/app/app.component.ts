import {Component, OnInit} from '@angular/core';
import {Call} from '../../src-gen';
import {NGXLogger} from 'ngx-logger';
import {CallsStoreService} from "./state/calls-store.service";
import {Observable} from "rxjs";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly displayedColumns = ['number', 'date', 'duration'];

  readonly calls: Observable<Call[]>;

  loaded: boolean = false;

  constructor(
    private callsStore: CallsStoreService,
    private logger: NGXLogger) {
    this.calls = callsStore.allCalls();
    this.calls.subscribe(calls => {
      logger.debug("Loaded " + calls.length + " Calls");
    });
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
