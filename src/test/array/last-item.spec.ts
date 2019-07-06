import { lastItem, LastItemFn } from '../../array/last-item';

const { label, fn } = lastItem;

Object.defineProperty(Array.prototype, label, { value: fn });

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

declare global {
  interface Array<T> {
    lastItem: LastItemFn<T>;
  }
}
