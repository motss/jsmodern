import { extend } from '../../extend';
import { isEven } from '../../number/is-even';

extend({ number: [isEven] });

describe('Number.prototype.isEven', () => {
  type TestSuccess = [string, number, boolean];
  test.each<TestSuccess>([
    ['negative even number', -2, true],
    ['zero', 0, true],
    ['positive even number', 2, true],
    ['positive odd number', 13, false],
  ])('%s', (_, a, expected) => {
    const d = a.isEven();

    expect(d).toStrictEqual(expected);
  });
});
