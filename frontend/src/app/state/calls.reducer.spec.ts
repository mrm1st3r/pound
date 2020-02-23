import {reducer} from "./calls.reducer";
import {callsLoaded} from "./calls.actions";
import {Call} from "./calls.model";

describe('CallsReducer', () => {

  it('should load new calls', () => {
    // given:
    const testArray: Call[] = [{
      number: '12345',
      duration: 0,
      date: '',
      answered: true,
      direction: 'OUTGOING'
    }];
    const action = callsLoaded(testArray);

    // when:
    const actual = reducer(undefined, action);

    // then:
    expect(actual).toEqual({calls: testArray});
  });
});
