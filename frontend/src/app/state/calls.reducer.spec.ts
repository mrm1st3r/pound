import {async} from '@angular/core/testing';
import {reducer} from "./calls.reducer";
import {CallsLoadedAction} from "./calls.actions";

describe('CallsReducer', () => {

  it('should load new calls', async(() => {
    // given:
    let testArray = [{dst: '12345'}];
    let action = new CallsLoadedAction(testArray);

    // when:
    let actual = reducer(null, action);

    // then:
    expect(actual).toEqual({calls: testArray});
  }));
});
