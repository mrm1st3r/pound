import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

const selectFeature = (state: AppState) => state.calls;

export const getCallsSelector = createSelector(
    selectFeature,
    state => state.calls
);
