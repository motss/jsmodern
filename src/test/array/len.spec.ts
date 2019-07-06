import { len, LenFn } from '../../array/len';

const { label, fn } = len;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.len', () => {
  type TestSuccess = [string, number[], number];
  test.each<TestSuccess>([
    ['[].len()', [], 0],
    ['[1, 2].len()', [1, 2], 2],
  ])('%s', (_, a, expected) => {
    const d = a.len();

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Array<T> {
    len: LenFn;
  }
}
