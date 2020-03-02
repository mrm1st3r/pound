import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Call, isIncoming} from "../state/calls.model";

@Component({
  selector: 'pound-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallListComponent implements OnInit {

  @Input()
  calls: Call[];

  constructor() { }

  ngOnInit(): void {
  }

  public icon(call: Call): string {
    return determineCallIcon(isIncoming(call), call.answered)
  }

  public color(call: Call): string {
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
