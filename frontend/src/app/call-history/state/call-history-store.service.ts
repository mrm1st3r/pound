import {Injectable} from "@angular/core";
import {Select, StoreService} from "@ngxp/store-service";
import {selectCallHistory} from "./call-history.selectors";
import {CallHistoryEntry} from "./call-history.model";
import {Observable} from "rxjs";
import {CallsState} from "../../state/calls.reducer";

@Injectable()
export class CallHistoryStoreService extends StoreService<CallsState> {

  @Select(selectCallHistory)
  selectCallHistory: () => Observable<CallHistoryEntry[]>;
}
