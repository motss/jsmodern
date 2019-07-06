import { iter, IterFn } from '../../array/iter';

const { label, fn } = iter;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.iter', () => {
  type TestSuccess = [string, number[], number];
  test.each<TestSuccess>([
    ['[].iter()', [], 0],
    ['[1].iter()', [1], 1],
    ['[1, 2].iter()', [1, 2], 2],
  ])('%s', (_, a, expected) => {
    let size = 0;

    for (const __ of a.iter()) size += 1;

    expect(size).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    iter: IterFn<T>;
  }
}
