import { isEmpty } from '../../array/is-empty.js';
import { extend } from '../../extend.js';

extend({ array: [isEmpty] });

describe('Array.prototype.isEmpty', () => {
  type TestSuccess = [string, number[], boolean];
  test.each<TestSuccess>([
    ['[].isEmpty()', [], true],
    ['[1, 2].isEmpty()', [1, 2], false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();

    expect(d).toStrictEqual(expected);
  });
});
