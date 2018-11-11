import {async} from '@angular/core/testing';
import {reducer} from "./calls.reducer";
import {CallsLoadedAction} from "./calls.actions";

describe('CallsReducer', () => {

  let fixture, component;

  it('should load new calls', async(() => {
    let testArray = [{dst: '12345'}];
    let action = new CallsLoadedAction(testArray);
    expect(reducer({calls: []}, action)).toEqual({calls: testArray});
  }));
});
