import { extend } from '../../extend.ts';
import { insert } from '../../string/insert.ts';

extend({ string: [insert] });

describe('String.prototype.insert', () => {
  type TestError = [string, string, number, string];
  test.each<TestError>([
    ['positive', '', 1, 's'],
    ['negative', 'str', -1, 'ing'],
  ])('out-of-bound (%s) index',
  (_, a, b, c) => {
    try {
      a.insert(b, c);
    } catch (e) {
      expect(e).toStrictEqual(new TypeError(`String index out of bound`));
    }
  });

  type TestSuccess = [string, string, number, string, string];
  test.each<TestSuccess>([
    ['empty string', '', 0, 's', 's'],
    ['single character', 's', 1, 'tr', 'str'],
    ['string', 'sting', 2, 'r', 'string'],
    ['string (head)', 'abc', 0, '123', '123abc'],
    ['string (tail)', 'abc', 3, '123', 'abc123'],
  ])('%s', (_, a, b, c, expected) => {
    const d = a.insert(b, c);
    expect(d).toStrictEqual(expected);
  });
});
