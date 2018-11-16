import {Injectable} from "@angular/core";
import {CallsState} from "./calls.state";
import {Dispatch, Observe, Select, StoreService} from "@ngxp/store-service";
import {getCalls} from "./calls.selector";
import {Call} from "../../../src-gen";
import {CallsActionTypes, LoadCallsAction} from "./calls.actions";
import {Observable} from "rxjs";

@Injectable()
export class CallsStoreService extends StoreService<CallsState> {

  @Select(getCalls)
  allCalls: () => Observable<Call[]>;

  @Dispatch(LoadCallsAction)
  loadCalls: () => void;

  @Observe([CallsActionTypes.callsLoaded])
  callsLoaded$: Observable<Call[]>;
}
