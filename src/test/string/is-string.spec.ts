import { extend } from '../../extend.ts';
import { isString } from '../../string/is-string.ts';

extend({ string: [isString] });

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
