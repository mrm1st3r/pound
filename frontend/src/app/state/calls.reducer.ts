import {callsLoaded} from "./calls.actions";
import {Call} from "../../../src-gen";
import {createReducer, on} from "@ngrx/store";
import {Action} from "@ngrx/store/src";

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
