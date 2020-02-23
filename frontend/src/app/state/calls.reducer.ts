import {callsLoaded} from "./calls.actions";
import {Action, createReducer, on} from "@ngrx/store";
import {Call} from "./calls.model";

export interface CallsState {
  readonly calls: Call[];
}

const initialState: CallsState = {
  calls: []
};

export const reducer = createReducer(initialState,
    on(callsLoaded,
        (state, {calls}) => ({calls: calls})
    )
);

export function callsReducer(state: CallsState | undefined, action: Action) {
  return reducer(state, action);
}

export const reducers = {
  calls: callsReducer
};
