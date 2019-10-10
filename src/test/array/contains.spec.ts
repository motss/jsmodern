import { contains } from '../../array/contains.js';
import { extend } from '../../extend.js';

extend({ array: [contains] });

describe('Array.prototype.contains', () => {
  type TestSuccess = [string, number[], null | undefined | number, boolean];
  test.each<TestSuccess>([
    ['[].contains()', [], undefined, false],
    ['[].contains(null)', [], null, false],

    ['[1, 2].contains()', [1, 2], undefined, false],
    ['[1, 2].contains(null)', [1, 2], null, false],
    ['[1, 2].contains(-1)', [1, 2], -1, false],
    ['[1, 2].contains(0)', [1, 2], 0, false],
    ['[1, 2].contains(1)', [1, 2], 1, true],
    ['[1, 2].contains(2)', [1, 2], 2, true],
    ['[1, 2].contains(2.5)', [1, 2], 2.5, false],
  ])('%s', (_, a, b, expected) => {
    const d = a.contains(b!);

    expect(d).toStrictEqual(expected);
  });
});
