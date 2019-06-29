import { isString, IsStringFn } from '../../string/is-string.js';

const { label, fn } = isString;

Object.defineProperty(String, label, { value: fn });

describe('String.isString', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['string', '', true],
    ['Array', [], false],
    ['Object', {}, false],
    ['boolean:true', true, false],
    ['boolean:false', false, false],
    ['Symbol', Symbol('symbol'), false],
    ['null', null, false],
    ['undefined', undefined, false],
    ['function', () => void 0, false],
    ['number', 123, false],
  ])('%s', (_, a, expected) => {
    const d = String.isString(a);
    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface StringConstructor {
    isString: IsStringFn;
  }
}
