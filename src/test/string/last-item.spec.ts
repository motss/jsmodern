import { extend } from '../../extend.ts';
import { lastItem } from '../../string/last-item.ts';

extend({ string: [lastItem] });

describe('String.prototype.lastItem', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'g'],
  ])('%s', (_, a, expected) => {
    const d = a.lastItem();
    expect(d).toStrictEqual(expected);
  });
});
