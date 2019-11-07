import { extend } from '../../extend.ts';
import { isPromise } from '../../promise/is-promise.ts';

extend({ promise: [isPromise] });

describe('Promise.isPromise', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isPromise()', undefined, false],
    ['.isPromise(null)', null, false],
    ['.isPromise(0)', 0, false],
    ['.isPromise([])', [], false],
    ['.isPromise({})', {}, false],
    ['.isPromise(() => void 0)', () => void 0, false],
    ['.isPromise(async () => void 0)', async () => void 0, false],
    [`.isPromise(Symbol('a'))`, Symbol('a'), false],
    [`.isPromise(true)`, true, false],
    [`.isPromise('a')`, 'a', false],
    [`.isPromise(class A {})`, class A {}, false],

    ['.isPromise(Promise.resolve(1))', , false],
    ['.isPromise(Promise.reject(0))', , false],
  ])('%s', (_, a, expected) => {
    const d = Promise.isPromise(a);

    expect(d).toStrictEqual(expected);
  });
});
