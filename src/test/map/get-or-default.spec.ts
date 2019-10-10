import { extend } from '../../extend.js';
import { getOrDefault } from '../../map/get-or-default.js';

extend({ map: [getOrDefault] });

describe('Map.prototype.getOrDefault', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Map<any, any>, undefined | null | number, undefined | null | number, undefined | null | number];
  test.each<TestSuccess>([
    ['{}.getOrDefault()', new Map(), undefined, undefined, undefined],
    ['{}.getOrDefault(null)', new Map(), null, undefined, undefined],
    ['{}.getOrDefault(null, 0)', new Map(), null, 0, 0],

    ['{1=>1, 2=>2}.getOrDefault(1)', new Map([[1, 1], [2, 2]]), 1, 1, 1],
    ['{1=>1, 2=>2}.getOrDefault(3)', new Map([[1, 1], [2, 2]]), 3, undefined, undefined],
    ['{1=>1, 2=>2}.getOrDefault(1, 2)', new Map([[1, 1], [2, 2]]), 1, 2, 1],
    ['{1=>1, 2=>2}.getOrDefault(3, 0)', new Map([[1, 1], [2, 2]]), 3, 0, 0],
  ])('%s', (_, a, b, c, expected) => {
    const d = a.getOrDefault(b, c);

    expect(d).toStrictEqual(expected!);
  });

});
