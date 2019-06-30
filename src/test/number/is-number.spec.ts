import { isNumber, IsNumberFn } from '../../number/is-number.js';

const { label, fn } = isNumber;

Object.defineProperty(Number, label, { value: fn });

describe('Number.isNumber', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['string', '', false],
    ['Array', [], false],
    ['Object', {}, false],
    ['boolean:true', true, false],
    ['boolean:false', false, false],
    ['Symbol', Symbol('symbol'), false],
    ['null', null, false],
    ['undefined', undefined, false],
    ['function', () => void 0, false],
    ['number', 123, true],

    ['number:Infinity', Infinity, true],
    ['number:NaN', NaN, true],
    ['number:decimals', 1.5, true],
    ['number:exponentiation', 1e3, true],
    ['number:octal', 0o755, true],
    ['number:hex', 0xfafafa, true],
    ['number:binary', 0b0101_0011, true],
    ['number:negInfinity', Number.NEGATIVE_INFINITY, true],
  ])('%s', (_, a, expected) => {
    const d = Number.isNumber(a);

    expect(d).toEqual(expected);
  });
});

declare global {
  interface NumberConstructor {
    isNumber: IsNumberFn;
  }
}
