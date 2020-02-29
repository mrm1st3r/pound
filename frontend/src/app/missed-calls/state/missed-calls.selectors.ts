import {createSelector} from "@ngrx/store";
import {selectCallHistory} from "../../state/calls.selector";
import {Call} from "../../state/calls.model";

const filterMissed = (calls: Call[]) => calls
    .filter(c => c.direction === 'INCOMING' && !c.answered);

export const selectMissedCallsSince = createSelector(
    selectCallHistory,
    (calls: Call[], props: any) => {
      return filterMissed(calls)
    }
);

export const selectMissedCallsCount = createSelector(
    selectCallHistory,
    (calls: Call[]) => filterMissed(calls).length
);
