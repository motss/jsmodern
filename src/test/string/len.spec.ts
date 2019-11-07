import { extend } from '../../extend.ts';
import { len } from '../../string/len.ts';

extend({ string: [len] });

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
