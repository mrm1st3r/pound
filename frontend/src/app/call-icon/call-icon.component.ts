import {Component, Input} from '@angular/core';
import {Call} from "../../../src-gen";

@Component({
  selector: 'pound-call-icon',
  templateUrl: './call-icon.component.html',
  styleUrls: ['./call-icon.component.scss']
})
export class CallIconComponent {

  @Input()
  private call: Call;

  public iconClasses(): string {

    let classes = '';
    if (this.call.direction === "INCOMING") {
      classes += 'fa-sign-in'
    } else if (this.call.direction === 'OUTGOING') {
      classes += 'fa-sign-out'
    } else {
      classes += 'fa-phone'
    }

    if (this.call.disposition === 'ANSWERED') {
      classes += ' answered'
    } else if (this.call.disposition === 'NO ANSWER') {
      classes += ' no-answer'
    }
    return classes
  }
}
