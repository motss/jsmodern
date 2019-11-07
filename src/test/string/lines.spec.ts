import { extend } from '../../extend.ts';
import { lines } from '../../string/lines.ts';

extend({ string: [lines] });

describe('String.prototype.lines', () => {
  type TestSuccess = [string, string, string[]];
  test.each<TestSuccess>([
    ['empty string', '', []],
    ['single character', 's', ['s']],
    ['string', 'string', ['string']],
    ['multiple string and lines', '\nabc\n123\r\nstr\n', ['', 'abc', '123', 'str']],
    ['multiple lines', '\r\n', ['']],
  ])('%s', (_, a, expected) => {
    const d = a.lines();
    expect(d).toEqual(expected);
  });
});
