import { extend } from '../../extend.js';
import { iter } from '../../map/iter.js';

extend({ map: [iter] });

describe('Map.prototype.iter', () => {
  type TestSuccess = [string, Map<number, number>, [number, number][]];
  test.each<TestSuccess>([
    ['{}.iter()', new Map(), []],
    ['{1=>1, 2=>2}.iter()', new Map([[1, 1], [2, 2]]), [[1, 1], [2, 2]]],
  ])('%s', (_, a, expected) => {
    const iterator = a.iter();

    const d = [];
    let n = iterator.next();

    while (!n.done) {
      d.push(n.value);
      n = iterator.next();
    }

    expect(d).toEqual(expected!);
  });

});
