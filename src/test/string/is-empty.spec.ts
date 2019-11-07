import { extend } from '../../extend.ts';
import { isEmpty } from '../../string/is-empty.ts';

extend({ string: [isEmpty] });

describe('String.prototype.isEmpty', () => {
  type TestSuccess = [string, string, boolean];
  test.each<TestSuccess>([
    ['empty string', '', true],
    ['single character', 's', false],
    ['string', 'string', false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();
    expect(d).toStrictEqual(expected);
  });
});
