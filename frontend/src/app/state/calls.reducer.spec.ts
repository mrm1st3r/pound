import {async} from '@angular/core/testing';
import {reducer} from "./calls.reducer";
import {callsLoaded} from "./calls.actions";
import {Call} from "../../../src-gen";

describe('CallsReducer', () => {

  it('should load new calls', async(() => {
    // given:
    const testArray: Call[] = [{
      dst: '12345',
      src: '678',
      duration: 0,
      calldate: '',
      disposition: 'ANSWERED',
      direction: 'OUTGOING'
    }];
    const action = callsLoaded(testArray);

    // when:
    const actual = reducer(undefined, action);

    // then:
    expect(actual).toEqual({calls: testArray});
  }));
});
