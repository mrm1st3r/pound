import {Select, StoreService} from "@ngxp/store-service";
import {CallsState} from "../../state/calls.reducer";
import {selectMissedCallsCount, selectMissedCallsSince} from "./missed-calls.selectors";
import {Observable} from "rxjs";
import {Call} from "../../state/calls.model";
import {Injectable} from "@angular/core";

@Injectable()
export class MissedCallsStoreService extends StoreService<CallsState> {

  @Select(selectMissedCallsSince)
  selectMissedCalls: (since: string) => Observable<Call[]>;

  @Select(selectMissedCallsCount)
  selectMissedCallsCount: () => Observable<number>;
}
