import { isEmpty, IsEmptyFn } from '../../array/is-empty';

const { label, fn } = isEmpty;

Object.defineProperty(Array.prototype, label, { value: fn });

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

declare global {
  interface Array<T> {
    isEmpty: IsEmptyFn;
  }
}
