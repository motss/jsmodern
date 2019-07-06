import { any, AnyFn } from '../../array/any';

const { label, fn } = any;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.any', () => {
  const cb = (n: number) => n > 2;

  type TestSuccess = [string, number[], boolean];
  test.each<TestSuccess>([
    ['[].any(cb)', [], false],
    ['[0].any(cb)', [0], false],
    ['[1, 2, 3].any(cb)', [1, 2, 3], true],
    ['[3].any(cb)', [3], true],
    ['[3, 4].any(cb)', [3, 4], true],
  ])('%s', (_, a, expected) => {
    const d = a.any(cb);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    any: AnyFn<T>;
  }
}
