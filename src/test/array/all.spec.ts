import { all, AllFn } from '../../array/all';

const { label, fn } = all;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.all', () => {
  const cb = (n: number) => n > 2;

  type TestSuccess = [string, number[], boolean];
  test.each<TestSuccess>([
    ['[].all(cb)', [], true],
    ['[0].all(cb)', [0], false],
    ['[1, 2, 3].all(cb)', [1, 2, 3], false],
    ['[3].all(cb)', [3], true],
    ['[3, 4].all(cb)', [3, 4], true],
  ])('%s', (_, a, expected) => {
    const d = a.all(cb);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    all: AllFn<T>;
  }
}
