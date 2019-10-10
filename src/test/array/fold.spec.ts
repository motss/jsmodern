import { fold } from '../../array/fold.js';
import { extend } from '../../extend.js';

extend({ array: [fold] });

describe('Array.prototype.fold', () => {
  const cb = (p: any, n: any): any => p + n;

  type TestSuccess = [string, number[], undefined | null | number, undefined | null | number];
  test.each<TestSuccess>([
    ['[].fold(undefined, cb)', [], undefined, undefined],
    ['[].fold(null, cb)', [], null, null],

    ['[1].fold(undefined, cb)', [1], undefined, NaN],
    ['[1].fold(null, cb)', [1], null, 1],
    ['[1].fold(0, cb)', [1], 0, 1],
    ['[1, 2].fold(0, cb)', [1, 2], 0, 3],
  ])('%s', (_, a, b, expected) => {
    const d = a.fold(b, cb);

    expect(d).toStrictEqual(expected!);
  });

});
