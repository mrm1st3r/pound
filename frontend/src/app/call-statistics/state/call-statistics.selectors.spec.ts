import {Call} from "../../state/calls.model";
import {selectFrequentNumbers} from "./call-statistics.selectors";
import {AppState} from "../../app.state";

describe('callStatisticsSelectors', () => {

  describe('selectFrequentNumbers', () => {

    it('sums entries for a single number', () => {
      // given:
      const calls: Call[] = [
        call('1', 5),
        call('1', 7)
      ];

      // when:
      const frequentNumbers = selectFrequentNumbers(state(calls));

      // then:
      expect(frequentNumbers.length).toBe(1);
      expect(frequentNumbers[0]).toEqual({number: '1', duration: 12});
    });

    it('orders entries by total duration', () => {
      // given:
      const calls: Call[] = [
        call('1', 5),
        call('2', 7),
        call('1', 3)
      ];

      // when:
      const frequentNumbers = selectFrequentNumbers(state(calls));

      // then:
      expect(frequentNumbers.length).toBe(2);

      expect(frequentNumbers[0]).toEqual({number: '1', duration: 8});
      expect(frequentNumbers[1]).toEqual({number: '2', duration: 7});
    })
  });
});

function call(number: string, duration: number): Call {
  return {
    number,
    duration,
    direction: 'INCOMING',
    answered: true,
    date: ''
  };
}

function state(calls: Call[]): AppState {
  return {
    calls: {
      calls: calls
    }
  }
}
