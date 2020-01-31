import {Component, Input} from '@angular/core';
import {Call} from "../../../src-gen";

@Component({
  selector: 'pound-call-icon',
  templateUrl: './call-icon.component.html',
  styleUrls: ['./call-icon.component.scss']
})
export class CallIconComponent {

  @Input()
  public call: Call;

  public icon(): string {

    const answered = this.call.disposition === 'ANSWERED';
    const incoming = this.call.direction === 'INCOMING';

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

  public color(): string {
    if (this.call.disposition === 'ANSWERED') {
      return'answered'
    } else {
      return 'no-answer'
    }
  }
}
