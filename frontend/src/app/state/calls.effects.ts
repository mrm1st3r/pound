import {Actions, Effect, ofType} from "@ngrx/effects";
import {Call as CallEntity, CallControllerService} from "../../../src-gen";
import {callsLoaded, loadCalls} from "./calls.actions";
import {flatMap, map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Call, isIncoming} from "./calls.model";

@Injectable()
export class CallsEffects  {

  constructor (
      private actions: Actions,
      private callService: CallControllerService
  ) {}

  @Effect()
  loadCalls = this.actions.pipe(
      ofType(loadCalls),
      flatMap(() => this.callService.getCalls()),
      map(calls => calls.map(convertToHistoryEntry)),
      map((calls) => callsLoaded(calls))
  )
}

function convertToHistoryEntry(call: CallEntity): Call {
  return {
    date: call.calldate,
    duration: call.duration,
    number: relevantNumber(call),
    direction: direction(call),
    answered: answered(call)
  };
}

const direction = (call: CallEntity) => isIncoming(call) ? 'INCOMING': 'OUTGOING';

const relevantNumber = (call: CallEntity) => isIncoming(call) ? call.src : call.dst;

const answered = (call: CallEntity) => call.disposition === 'ANSWERED';
