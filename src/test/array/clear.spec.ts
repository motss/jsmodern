import { clear, ClearFn } from '../../array/clear';

const { label, fn } = clear;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.clear', () => {
  type TestSuccess = [string, any[], any[]];
  test.each<TestSuccess>([
    ['[].clear()', [], []],
    ['[1, 2].clear()', [], []],
    ['[{ a: 1 }, { b: 2 }].clear()', [{ a: 1 }, { b: 2 }], []],
  ])('%s', (_, a, expected) => {
    a.clear();

    expect(a).toEqual(expected);
  });
});

declare global {
  interface Array<T> {
    clear: ClearFn;
  }
}
