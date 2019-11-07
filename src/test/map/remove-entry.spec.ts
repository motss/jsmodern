import { extend } from '../../extend.ts';
import { removeEntry } from '../../map/remove-entry.ts';

extend({ map: [removeEntry] });

describe('Map.prototype.removeEntry', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Map<any, any>, undefined | null | number, boolean, [] | [undefined | null | number, undefined | number], boolean, number];
  test.each<TestSuccess>([
    ['{}.removeEntry()', new Map(), undefined, false, [undefined, undefined], false, 0],
    ['{}.removeEntry(null)', new Map(), null, false, [null, undefined], false, 0],
    ['{1=>1, 2=>2}.removeEntry(1)', new Map([[1, 1], [2, 2]]), 1, true, [1, 1], false, 1],
    ['{1=>1, 2=>2}.removeEntry(3)', new Map([[1, 1], [2, 2]]), 3, false, [3, undefined], false, 2],
  ])('%s', (_, a, b, c, expected, f, g) => {
    expect(a.has(b)).toStrictEqual(c);

    const d = a.removeEntry(b);

    expect(d).toEqual(expected!);
    expect(a.has(b)).toStrictEqual(f);
    expect(a.size).toStrictEqual(g);
  });

});
