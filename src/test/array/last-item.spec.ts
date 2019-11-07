import { lastItem } from '../../array/last-item.ts';
import { extend } from '../../extend.ts';

extend({ array: [lastItem] });

describe('Array.prototype.lastItem', () => {
  type TestSuccess = [string, number[], undefined | number];
  test.each<TestSuccess>([
    ['[].lastItem()', [], undefined],
    ['[1].lastItem()', [1], 1],
    ['[1, 2].lastItem()', [1, 2], 2],
  ])('%s', (_, a, expected) => {
    const d = a.lastItem();

    expect(d).toStrictEqual(expected!);
  });

});
