import { extend } from '../../extend.js';
import { firstIndex } from '../../string/first-index.js';

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
