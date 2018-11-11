import {Actions, Effect, ofType} from "@ngrx/effects";
import {CallControllerService} from "../../../src-gen";
import {CallsActionTypes, CallsLoadedAction} from "./calls.actions";
import {flatMap, map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class CallsEffects  {

  constructor (
      private actions: Actions,
      private callService: CallControllerService
  ) {}

  @Effect()
  loadCalls = this.actions.pipe(
      ofType(CallsActionTypes.loadCalls),
      flatMap(() => this.callService.getCalls()),
      map((calls) => new CallsLoadedAction(calls))
  )
}
