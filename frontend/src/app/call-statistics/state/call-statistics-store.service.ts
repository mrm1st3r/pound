import {Select, StoreService} from "@ngxp/store-service";
import {CallsState} from "../../state/calls.reducer";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {
  selectFrequentNumbers,
  selectTotalDuration,
  selectTotalIncomingDuration,
  selectTotalOutgoingDuration
} from './call-statistics.selectors';
import {FrequentlyCalledNumber} from "./call-statistics.model";

@Injectable()
export class CallStatisticsStoreService extends StoreService<CallsState> {

  @Select(selectTotalIncomingDuration)
  selectTotalIncomingDuration: () => Observable<number>;

  @Select(selectTotalOutgoingDuration)
  selectTotalOutgoingDuration: () => Observable<number>;

  @Select(selectTotalDuration)
  selectTotalDuration: () => Observable<number>;

  @Select(selectFrequentNumbers)
  selectFrequentNumbers: () => Observable<FrequentlyCalledNumber[]>
}
