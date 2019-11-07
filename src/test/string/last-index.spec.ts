import { extend } from '../../extend.ts';
import { lastIndex } from '../../string/last-index.ts';

extend({ string: [lastIndex] });

describe('String.prototype.lastIndex', () => {
  type TestSuccess = [string, string, number];
  test.each<TestSuccess>([
    ['empty string', '', 0],
    ['single character', 's', 0],
    ['string', 'string', 5],
  ])('%s', (_, a, expected) => {
    const d = a.lastIndex();
    expect(d).toStrictEqual(expected);
  });
});
