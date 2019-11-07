import { extend } from '../../extend.ts';
import { firstIndex } from '../../string/first-index.ts';

extend({ string: [firstIndex] });

describe('String.prototype.firstIndex', () => {
  type TestSuccess = [string, string, number];
  test.each<TestSuccess>([
    ['empty string', '', 0],
    ['single character', 's', 0],
    ['string', 'string', 0],
  ])('%s', (_, a, expected) => {
    const d = a.firstIndex();
    expect(d).toStrictEqual(expected);
  });
});
