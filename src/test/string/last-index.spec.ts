import { lastIndex, LastIndexFn } from '../../string/last-index.js';

const { label, fn } = lastIndex;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.lastIndex', () => {
  type TestSuccess = [string, string, number];
  test.each<TestSuccess>([
    ['empty string', '', -1],
    ['single character', 's', 0],
    ['string', 'string', 5],
  ])('%s', (_, a, expected) => {
    const d = a.lastIndex();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    lastIndex: LastIndexFn;
  }
}
