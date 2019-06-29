import { isEmpty, IsEmptyFn } from '../../string/is-empty.js';

const { label, fn } = isEmpty;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.isEmpty', () => {
  type TestSuccess = [string, string, boolean];
  test.each<TestSuccess>([
    ['empty string', '', true],
    ['single character', 's', false],
    ['string', 'string', false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    isEmpty: IsEmptyFn;
  }
}
