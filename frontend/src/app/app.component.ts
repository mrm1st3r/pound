import {Component, OnInit} from '@angular/core';
import {Call} from '../../src-gen';
import {NGXLogger} from 'ngx-logger';
import {CallsStoreService} from "./state/calls-store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pound';
  calls: Observable<Call[]>;

  constructor(
    private callsStore: CallsStoreService,
    private logger: NGXLogger) {
    this.calls = callsStore.allCalls();
    this.calls.subscribe(calls => {
      logger.debug(calls);
    });
  }

  ngOnInit() {
    this.callsStore.loadCalls();
  }
}
