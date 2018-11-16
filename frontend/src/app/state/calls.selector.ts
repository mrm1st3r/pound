import {Call} from "../../../src-gen";
import {AppState} from "../app.state";

export function getCalls() {
  return (state: AppState): Call[] => {
    return state.calls.calls;
  }
}
