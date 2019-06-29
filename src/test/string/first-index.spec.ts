import { firstIndex, FirstIndexFn } from '../../string/first-index.js';

const { label, fn } = firstIndex;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.firstIndex', () => {
  type TestSuccess = [string, string, number];
  test.each<TestSuccess>([
    ['empty string', '', 0],
    ['single character', 's', 0],
    ['string', 'string', 0],
  ])('%s', (_, a, expected) => {
    const d = a.firstIndex();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    firstIndex: FirstIndexFn;
  }
}
