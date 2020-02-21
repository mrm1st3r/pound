import {Call} from "../../../../src-gen";

export interface CallHistoryEntry {
  readonly number: string;
  readonly date: string;
  readonly duration: number;
  readonly direction: CallDirection;
  readonly answered: boolean;
}

export type CallDirection = 'INCOMING' | 'OUTGOING';

export function isIncoming(call: CallHistoryEntry): boolean {
  return call.direction === 'OUTGOING';
}

export function convertToHistoryEntry(call: Call): CallHistoryEntry {
  return {
    date: call.calldate,
    duration: call.duration,
    number: relevantNumber(call),
    direction: direction(call),
    answered: answered(call)
  };
}

const incomingCall = (call: Call) => call.direction === 'INCOMING';

const direction = (call: Call) => incomingCall(call) ? 'INCOMING': 'OUTGOING';

const relevantNumber = (call: Call) => incomingCall(call) ? call.src : call.dst;

const answered = (call: Call) => call.disposition === 'ANSWERED';
