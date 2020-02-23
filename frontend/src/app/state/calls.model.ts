export interface Call {
  readonly number: string;
  readonly date: string;
  readonly duration: number;
  readonly direction: CallDirection;
  readonly answered: boolean;
}

export type CallDirection = 'INCOMING' | 'OUTGOING';

export const isIncoming = (call: {direction: string}) => call.direction === 'INCOMING';
