import { checkInt } from '../../number/check-int';

describe('check-int', () => {
  const errorMessage = new TypeError(`Expect 'value' to be of type number`);

  type TestError = [string, any, TypeError];
  test.each<TestError>([
    ['string', '', errorMessage],
    ['Array', [], errorMessage],
    ['Object', {}, errorMessage],
    ['boolean:true', true, errorMessage],
    ['boolean:false', false, errorMessage],
    ['Symbol', Symbol('symbol'), errorMessage],
    ['null', null, errorMessage],
    ['undefined', undefined, errorMessage],
    ['function', () => void 0, errorMessage],
  ])('%s', (_, a, expected) => {
    try {
      checkInt(a, 'value');
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number, number];
  test.each<TestSuccess>([
    ['number', 123, 123],
    ['number:Infinity', Infinity, Infinity],
    ['number:NaN', NaN, NaN],
    ['number:decimals', 1.5, 1.5],
    ['number:exponentiation', 1e3, 1e3],
    ['number:octal', 0o755, 493],
    ['number:hex', 0xfafafa, 16448250],
    ['number:binary', 0b0101_0011, 83],
    ['number:negInfinity', Number.NEGATIVE_INFINITY, -Infinity],
  ])('%s', (_, a, expected) => {
    const d = checkInt(a, 'value');
    expect(d).toStrictEqual(expected);
  });
});
