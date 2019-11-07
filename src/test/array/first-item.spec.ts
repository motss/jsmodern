import { firstItem } from '../../array/first-item.ts';
import { extend } from '../../extend.ts';

extend({ array: [firstItem] });

describe('Array.prototype.firstItem', () => {
  type TestSuccess = [string, number[], undefined | number];
  test.each<TestSuccess>([
    ['[].firstItem()', [], undefined],
    ['[1].firstItem()', [1], 1],
    ['[1, 2].firstItem()', [1, 2], 1],
  ])('%s', (_, a, expected) => {
    const d = a.firstItem();

    expect(d).toStrictEqual(expected!);
  });

});
