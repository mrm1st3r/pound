import {callsLoaded} from "./calls.actions";
import {Call} from "../../../src-gen";
import {createReducer, on} from "@ngrx/store";

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

export const reducers = {
  calls: reducer
};
