import {CallsState} from "./calls.state";
import {CallsActions, CallsActionTypes} from "./calls.actions";

const initialState: CallsState = {
  calls: []
};

export function reducer(state: CallsState = initialState, action: CallsActions): CallsState {

  switch (action.type) {
    case CallsActionTypes.callsLoaded: {
      return {
        calls: action.payload
      };
    }
    default:
      return state;
  }
}

export const reducers = {
  calls: reducer
};
