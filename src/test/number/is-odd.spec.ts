import { extend } from '../../extend';
import { isOdd } from '../../number/is-odd';

extend({ number: [isOdd] });

describe('Number.prototype.isOdd', () => {
  type TestSuccess = [string, number, boolean];
  test.each<TestSuccess>([
    ['negative even number', -3, true],
    ['zero', 0, false],
    ['positive even number', 2, false],
    ['positive odd number', 13, true],
  ])('%s', (_, a, expected) => {
    const d = a.isOdd();

    expect(d).toStrictEqual(expected);
  });
});
