import { lastItem, LastItemFn } from '../../string/last-item.js';

const { label, fn } = lastItem;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.lastItem', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'g'],
  ])('%s', (_, a, expected) => {
    const d = a.lastItem();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    lastItem: LastItemFn;
  }
}
