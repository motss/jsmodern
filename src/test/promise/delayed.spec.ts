import { extend } from '../../extend';
import { delayed } from '../../promise/delayed';

extend({ promise: [delayed] });

describe('Promise.delayed', () => {
  const errorMessage = new Error('err');
  const errCb = () => { throw errorMessage; };
  type TestError = [string, number, Error];
  test.each<TestError>([
    ['.delayed(0, errCb)', 1, errorMessage],
  ])('%s', async (_, a, expected) => {
    try {
      await Promise.delayed(a, errCb);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  const cb = () => 1;
  type TestSuccess = [string, undefined | null | number, undefined | number];
  test.each<TestSuccess>([
    ['.delayed()', undefined, void 0],
    ['.delayed(null)', null, void 0],
    ['.delayed(-1, cb)', -1, 1],
    ['.delayed(0, cb)', 0, 1],
    ['.delayed(1, cb)', 1, 1],
    ['.delayed(2, cb)', 2, 1],
  ])('%s', async (_, a, expected) => {
    const d = await Promise.delayed(a!, null == a ? null! : cb);

    expect(d).toStrictEqual(expected!);
  });
});
