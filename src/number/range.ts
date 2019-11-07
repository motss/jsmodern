import { PrototypeStruct } from '../index.ts';
import { checkInt } from './check-int.ts';

interface Range {
  range(start: number, end?: number, step?: number): number[];
}

export const range: PrototypeStruct = {
  isStatic: true,
  label: 'range',
  fn: function numberRange(start: number, end?: number, step?: number): number[] {
    // range table
    // start | end | step
    // 000 - error
    // 001 - error
    // 010 - error
    // 011 - error
    // 100 - [0: start - 1]
    // 101 - error
    // 110 - [start, end - 1]
    // 111 - [start, end - 1, step]

    const startInt = checkInt(start, 'start');
    const isEndNull = null == end;
    const isStepNull = null == step;

    if (isEndNull && isStepNull) {
      if (startInt < 0) throw new TypeError(`'start' cannot be less than 0`);

      return Array.from(Array(startInt), (_, i) => i);
    }

    const endInt = checkInt(end, 'end');

    if (isStepNull) return Array.from(Array(endInt - startInt), (_, i) => startInt + i);

    const stepInt = checkInt(step, 'step');

    return Array.from(
      Array(Math.ceil((endInt - startInt) / stepInt)), (_, i) => startInt + (i * stepInt));
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface NumberConstructor extends Range {}
}
