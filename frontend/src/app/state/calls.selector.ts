import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CallsState} from "./calls.reducer";
import {Call} from "./calls.model";

export const selectCallsFeature = createFeatureSelector<CallsState>('calls');

export const selectCallHistory = createSelector(
    selectCallsFeature,
    (state: CallsState): Call[] => {
      return state.calls
    }
);
