import { extend } from '../../extend.ts';
import { entry } from '../../map/entry.ts';

extend({ map: [entry] });

describe('Map.prototype.entry', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Map<any, any>, undefined | null | number, [] | [undefined | null | number, undefined | number]];
  test.each<TestSuccess>([
    ['{}.entry()', new Map(), undefined, [undefined, undefined]],
    ['{}.entry(null)', new Map(), null, [null, undefined]],
    ['{1=>1, 2=>2}.entry(1)', new Map([[1, 1], [2, 2]]), 1, [1, 1]],
    ['{1=>1, 2=>2}.entry(3)', new Map([[1, 1], [2, 2]]), 3, [3, undefined]],
  ])('%s', (_, a, b, expected) => {
    const d = a.entry(b);

    expect(d).toEqual(expected!);
  });

});
