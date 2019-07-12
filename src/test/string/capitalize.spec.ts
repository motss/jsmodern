import { extend } from '../../extend.js';
import { capitalize } from '../../string/capitalize.js';

extend({ string: [capitalize] });

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
