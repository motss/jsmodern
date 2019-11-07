import { iter } from '../../array/iter.ts';
import { extend } from '../../extend.ts';

extend({ array: [iter] });

describe('Array.prototype.iter', () => {
  type TestSuccess = [string, number[], number];
  test.each<TestSuccess>([
    ['[].iter()', [], 0],
    ['[1].iter()', [1], 1],
    ['[1, 2].iter()', [1, 2], 2],
  ])('%s', (_, a, expected) => {
    let size = 0;

    for (const __ of a.iter()) size += 1;

    expect(size).toStrictEqual(expected!);
  });

});
