import { filled } from '../../array/filled';
import { extend } from '../../extend';

extend({ array: [filled] });

describe('Array.filled', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Unable to create list with unknown length`);

  type TestError = [string, number | undefined | null, undefined | null, Error];
  test.each<TestError>([
    ['Array.filled()', undefined, undefined, errorMessage],
    ['Array.filled(null)', null, undefined, errorMessage],
    ['Array.filled(0)', 0, null, errorMessage],
    ['Array.filled(-1)', 0, null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      if (undefined === a && undefined === b) {
        // @ts-ignore
        Array.filled();
      } else {
        Array.filled(a!, b!);
      }
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number, any[]];
  test.each<TestSuccess>([
    ['Array.filled(1)', 1, [0]],
    ['Array.filled(2)', 1, [0]],
  ])('%s', (_, a, expected) => {
    const d = Array.filled(a);

    expect(d).toEqual(expected);
  });

  const testFn = () => null;
  const testSymbol = Symbol('a');
  const testClass = class A {};

  type TestSuccessWithValue = [string, number, any, any[]];
  test.each<TestSuccessWithValue>([
    ['Array.filled(1, 0)', 1, 0, [0]],
    ['Array.filled(1, 1)', 1, 1, [1]],
    ['Array.filled(1, undefined)', 1, void 0, [void 0]],
    ['Array.filled(1, null)', 1, null, [null]],
    ['Array.filled(1, [])', 1, [], [[]]],
    ['Array.filled(1, [1])', 1, [1], [[1]]],
    ['Array.filled(1, { a: 1 })', 1, { a: 1 }, [{ a: 1 }]],
    [`Array.filled(1, 'a')`, 1, 'a', ['a']],
    [`Array.filled(1, true)`, 1, true, [true]],
    [`Array.filled(1, false)`, 1, false, [false]],

    ['Array.filled(1, () => null)', 1, testFn, [testFn]],
    [`Array.filled(1, Symbol('a'))`, 1, testSymbol, [testSymbol]],
    // tslint:disable-next-line: max-classes-per-file
    [`Array.filled(1, <class>)`, 1, testClass, [testClass]],
  ])('%s', (_, a, b, expected) => {
    const d = Array.filled(a, b);

    expect(d).toEqual(expected);
  });
});
