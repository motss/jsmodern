import { extend } from '../../extend.js';
import { firstItem } from '../../string/first-item.js';

extend({ string: [firstItem] });

describe('String.prototype.firstItem', () => {
  test.each([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 's'],
  ])('%s', (_, a, expected) => {
    const d = a.firstItem();
    expect(d).toStrictEqual(expected);
  });
});
