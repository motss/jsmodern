import { firstItem, FirstItemFn } from '../../array/first-item';

const { label, fn } = firstItem;

Object.defineProperty(Array.prototype, label, { value: fn });

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

declare global {
  interface Array<T> {
    firstItem: FirstItemFn<T>;
  }
}
