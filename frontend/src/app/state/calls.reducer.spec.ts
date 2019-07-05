import {async} from '@angular/core/testing';
import {reducer} from "./calls.reducer";
import {callsLoaded} from "./calls.actions";

describe('CallsReducer', () => {

  it('should load new calls', async(() => {
    // given:
    const testArray = [{dst: '12345'}];
    const action = callsLoaded(testArray);

    // when:
    const actual = reducer(null, action);

    // then:
    expect(actual).toEqual({calls: testArray});
  }));
});
