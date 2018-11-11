import {Injectable} from "@angular/core";
import {CallsState} from "./calls.state";
import {Dispatch, Select, StoreService} from "@ngxp/store-service";
import {getCalls} from "./calls.selector";
import {Call} from "../../../src-gen";
import {LoadCallsAction} from "./calls.actions";
import {Observable} from "rxjs";

@Injectable()
export class CallsStoreService extends StoreService<CallsState> {

  @Select(getCalls)
  allCalls: () => Observable<Call[]>;

  @Dispatch(LoadCallsAction)
  loadCalls: () => void;

}
