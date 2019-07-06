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
    ['NaN', NaN, errorMessage],
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
    ['Infinity', Infinity, Infinity],
    ['decimals', 1.5, 1.5],
    ['exponentiation', 1e3, 1e3],
    ['octal', 0o755, 493],
    ['hex', 0xfafafa, 16448250],
    ['binary', 0b0101_0011, 83],
    ['negInfinity', Number.NEGATIVE_INFINITY, -Infinity],
  ])('%s', (_, a, expected) => {
    const d = checkInt(a, 'value');
    expect(d).toStrictEqual(expected);
  });
});
