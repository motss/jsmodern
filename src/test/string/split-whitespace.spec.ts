import { extend } from '../../extend.ts';
import { splitWhitespace } from '../../string/split-whitespace.ts';

extend({ string: [splitWhitespace] });

describe('String.prototype.splitWhitespace', () => {
  type TestSuccess = [string, string, string[]];
  test.each<TestSuccess>([
    ['empty string', '', []],
    ['single character', 's', ['s']],
    ['string', 'string', ['string']],
    ['multiple string and lines', '\nabc\n123 string\r\nslice', ['abc', '123', 'string', 'slice']],
    ['multiple lines', '\n\r\n', []],
  ])('%s', (_, a, expected) => {
    const d = a.splitWhitespace();
    expect(d).toEqual(expected);
  });
});
