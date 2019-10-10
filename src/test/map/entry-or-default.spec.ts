import { extend } from '../../extend.js';
import { entryOrDefault } from '../../map/entry-or-default.js';

extend({ map: [entryOrDefault] });

describe('Map.prototype.entryOrDefault', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Map<any, any>, undefined | null | number, undefined | null | number, [undefined | null | number, undefined | number]];
  test.each<TestSuccess>([
    ['{}.entryOrDefault()', new Map(), undefined, undefined, [undefined, undefined]],
    ['{}.entryOrDefault(null)', new Map(), null, undefined, [null, undefined]],
    ['{}.entryOrDefault(null, 0)', new Map(), null, 0, [null, 0]],

    ['{1=>1, 2=>2}.entryOrDefault(1)', new Map([[1, 1], [2, 2]]), 1, undefined, [1, 1]],
    ['{1=>1, 2=>2}.entryOrDefault(1, 2)', new Map([[1, 1], [2, 2]]), 1, 2, [1, 1]],
    ['{1=>1, 2=>2}.entryOrDefault(3)', new Map([[1, 1], [2, 2]]), 3, undefined, [3, undefined]],
    ['{1=>1, 2=>2}.entryOrDefault(3, 0)', new Map([[1, 1], [2, 2]]), 3, 0, [3, 0]],
  ])('%s', (_, a, b, c, expected) => {
    const d = a.entryOrDefault(b, c);

    expect(d).toEqual(expected!);
  });

});
