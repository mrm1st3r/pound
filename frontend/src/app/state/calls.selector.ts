import {CallsState} from "./calls.state";
import {Call} from "../../../src-gen";

export function getCalls() {
  return (state: CallsState): Call[] => {
    return state.calls;
  }
}
