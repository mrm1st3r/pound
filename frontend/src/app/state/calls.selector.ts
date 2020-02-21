import {createSelector} from "@ngrx/store";
import {createFeatureSelector} from "@ngrx/store";
import {CallsState} from "./calls.reducer";

export const selectCallsFeature = createFeatureSelector<CallsState>('calls');

export const getCallsSelector = createSelector(
    selectCallsFeature,
    state => state.calls
);
