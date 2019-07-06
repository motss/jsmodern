import { isNumber, IsNumberFn } from '../../number/is-number.js';

const { label, fn } = isNumber;

Object.defineProperty(Number, label, { value: fn });

describe('Number.isNumber', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['string', '', false],
    ['Array', [], false],
    ['Object', {}, false],
    ['true', true, false],
    ['false', false, false],
    ['Symbol', Symbol('symbol'), false],
    ['null', null, false],
    ['undefined', undefined, false],
    ['function', () => void 0, false],
    ['NaN', NaN, false],

    ['number', 123, true],
    ['Infinity', Infinity, true],
    ['decimals', 1.5, true],
    ['exponentiation', 1e3, true],
    ['octal', 0o755, true],
    ['hex', 0xfafafa, true],
    ['binary', 0b0101_0011, true],
    ['negInfinity', Number.NEGATIVE_INFINITY, true],
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
