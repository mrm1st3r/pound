import {CallsActions, callsLoaded} from "./calls.actions";
import {Call} from "../../../src-gen";

export interface CallsState {
  readonly calls: Call[];
}

const initialState: CallsState = {
  calls: []
};

export function reducer(state: CallsState = initialState, action: CallsActions): CallsState {

  switch (action.type) {
    case callsLoaded.type: {
      return {
        calls: action.calls
      };
    }
    default:
      return state;
  }
}

export const reducers = {
  calls: reducer
};
