import {Injectable} from "@angular/core";
import {Dispatch, Dispatcher, Observe, Select, StoreService} from "@ngxp/store-service";
import {callsLoaded, loadCalls} from "./calls.actions";
import {Observable} from "rxjs";
import {CallsState} from "./calls.reducer";
import {Call} from "./calls.model";
import {selectCallHistory} from './calls.selector';

@Injectable()
export class CallsStoreService extends StoreService<CallsState> {

  @Select(selectCallHistory)
  selectCallHistory: () => Observable<Call[]>;

  @Dispatch(loadCalls)
  loadCalls: Dispatcher<typeof loadCalls>;

  @Observe([callsLoaded])
  callsLoaded$: Observable<Call[]>;
}
