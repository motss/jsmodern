import { lines, LinesFn } from '../../string/lines.js';

const { label, fn } = lines;

Object.defineProperty(String.prototype, label, { value: fn });

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

declare global {
  interface String {
    lines: LinesFn;
  }
}
