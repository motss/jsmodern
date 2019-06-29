import { firstItem, FirstItemFn } from '../../string/first-item.js';

const { label, fn } = firstItem;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.firstItem', () => {
  test.each([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 's'],
  ])('%s', (_, a, expected) => {
    const d = a.firstItem();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    firstItem: FirstItemFn;
  }
}
