import { extend } from '../../extend.ts';
import { capitalize } from '../../string/capitalize.ts';

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
