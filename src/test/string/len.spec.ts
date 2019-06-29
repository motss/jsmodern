import { len, LenFn } from '../../string/len.js';

const { label, fn } = len;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.len', () => {
  type TestSuccess = [string, string, number];
  test.each<TestSuccess>([
    ['empty string', '', 0],
    ['single character', 's', 1],
    ['string', 'string', 6],
  ])('%s', (_, a, expected) => {
    const d = a.len();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    len: LenFn;
  }
}
