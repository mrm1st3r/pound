import {createSelector} from "@ngrx/store";
import {CallHistoryEntry, convertToHistoryEntry} from "./call-history.model";
import {selectCallsFeature} from "../../state/calls.selector";
import {CallsState} from "../../state/calls.reducer";

export const selectCallHistory = createSelector(
    selectCallsFeature,
    (state: CallsState): CallHistoryEntry[] => {
      return state.calls.map(convertToHistoryEntry)
    }
);
