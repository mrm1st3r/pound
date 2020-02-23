import {createSelector} from "@ngrx/store";
import {selectCallsFeature} from "../../state/calls.selector";
import {CallsState} from "../../state/calls.reducer";
import {Call} from "../../../../src-gen";

function sumDurationWhere(condition: (call: Call) => boolean) {
  return (state: CallsState) => state.calls
      .filter(condition)
      .map(c => c.duration)
      .reduce((sum, duration) => sum + duration, 0)
}

export const selectTotalIncomingDuration = createSelector(
    selectCallsFeature,
    sumDurationWhere(c => c.direction === 'INCOMING')
);

export const selectTotalOutgoingDuration = createSelector(
    selectCallsFeature,
    sumDurationWhere(c => c.direction === 'OUTGOING')
);

export const selectTotalDuration = createSelector(
    selectCallsFeature,
    sumDurationWhere(() => true)
);
