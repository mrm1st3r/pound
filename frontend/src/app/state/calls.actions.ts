import {Action} from "@ngrx/store";
import {Call} from "../../../src-gen";

export enum CallsActionTypes {
  loadCalls = "[Calls] load calls",
  callsLoaded = "[Calls] calls loaded"
}

export class LoadCallsAction implements Action {
  readonly type = CallsActionTypes.loadCalls;
}

export class CallsLoadedAction implements Action {
  readonly type = CallsActionTypes.callsLoaded;

  constructor(
      public payload: Call[]
  ) {}
}

export type CallsActions =
    | LoadCallsAction
    | CallsLoadedAction;
