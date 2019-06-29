import { capitalize, CapitalizeFn } from '../../string/capitalize.js';

const { label, fn } = capitalize;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototypes.capitalize', () => {
  test.each([
    ['empty string', '', ''],
    ['single character', 'a', 'A'],
    ['string', 'abc', 'Abc'],
  ])('%s', (_, a, expected) => {
    const d = a.capitalize();
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface String {
    capitalize: CapitalizeFn;
  }
}
