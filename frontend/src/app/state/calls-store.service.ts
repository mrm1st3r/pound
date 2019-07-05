import {Injectable} from "@angular/core";
import {Dispatch, Dispatcher, Observe, Select, StoreService} from "@ngxp/store-service";
import {getCallsSelector} from "./calls.selector";
import {Call} from "../../../src-gen";
import {callsLoaded, loadCalls} from "./calls.actions";
import {Observable} from "rxjs";
import {CallsState} from "./calls.reducer";

@Injectable()
export class CallsStoreService extends StoreService<CallsState> {

  @Select(getCallsSelector)
  allCalls: () => Observable<Call[]>;

  @Dispatch(loadCalls)
  loadCalls: Dispatcher<typeof loadCalls>;

  @Observe([callsLoaded])
  callsLoaded$: Observable<Call[]>;
}
