import { extend } from '../../extend.ts';
import { isMultipleOf } from '../../number/is-multiple-of.ts';

extend({ number: [isMultipleOf] });

describe('Number.prototype.isMultipleOf', () => {
  type TestSuccess = [string, number, number | null, boolean];
  test.each<TestSuccess>([
    ['8.isMultipleOf(null)', 8, null, false],

    ['8.isMultipleOf(0)', 8, 0, false],
    ['8.isMultipleOf(2)', 8, 2, true],
    ['8.isMultipleOf(-1)', 8, -1, true],
    ['8.isMultipleOf(Infinity)', 8, Infinity, false],
  ])('%s', (_, a, b, expected) => {
    const d = a.isMultipleOf(b!);

    expect(d).toStrictEqual(expected);
  });
});
