export interface FrequentlyCalledNumber {
  number: string;
  duration: number;
}

export function frequentlyCalledNumber(number: string, duration: number): FrequentlyCalledNumber {
  return {number, duration};
}
