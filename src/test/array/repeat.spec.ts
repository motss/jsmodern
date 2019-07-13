import { repeat } from '../../array/repeat';
import { extend } from '../../extend';

extend({ array: [repeat] });

describe('Array.prototype.repeat', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, number[], undefined | null | number, number[]];
  test.each<TestSuccess>([
    ['[].repeat()', [], undefined, []],
    ['[].repeat()', [], null, []],

    ['[1].repeat()', [1], undefined, []],
    ['[1].repeat()', [1], null, []],

    ['[1, 2].repeat()', [1, 2], undefined, []],
    ['[1, 2].repeat()', [1, 2], null, []],
    ['[1, 2].repeat(-1)', [1, 2], -1, []],
    ['[1, 2].repeat(0)', [1, 2], 0, []],

    ['[1, 2].repeat(1)', [1, 2], 1, [1, 2]],
    ['[1, 2].repeat(2)', [1, 2], 2, [1, 2, 1, 2]],
  ])('%s', (_, a, b, expected) => {
    const d = a.repeat(b!);

    expect(d).toEqual(expected!);
  });

});
