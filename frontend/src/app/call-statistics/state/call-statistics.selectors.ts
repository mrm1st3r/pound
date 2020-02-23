import {createSelector} from "@ngrx/store";
import {selectCallsFeature} from "../../state/calls.selector";
import {CallsState} from "../../state/calls.reducer";
import {Call} from "../../state/calls.model";
import {FrequentlyCalledNumber, frequentlyCalledNumber} from "./call-statistics.model";
import {AppState} from "../../app.state";

function sumDurationWhere(condition: (call: Call) => boolean) {
  return (state: CallsState) => state.calls
      .filter(condition)
      .map(c => c.duration)
      .reduce((sum, duration) => sum + duration, 0)
}

/*
 * Total Call Duration
 */

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


/*
 * Frequent numbers
 */

export const selectFrequentNumbers = createSelector<AppState, CallsState, FrequentlyCalledNumber[]>(
    selectCallsFeature,
    (state: CallsState) => Object.entries(durationMappedByNumber(state.calls))
        .map(([number, duration]) => frequentlyCalledNumber(number, duration))
        .sort((a, b) => b.duration - a.duration)
);

function durationMappedByNumber(calls: Call[]): { [number: string]: number } {
  return calls
      .reduce((numbers: { [key: string]: number }, {number, duration}) => ({
        ...numbers,
        [number]: (numbers[number] || 0 ) + duration
      }), {});
}
