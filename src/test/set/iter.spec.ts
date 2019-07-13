import { extend } from '../../extend';
import { iter } from '../../set/iter';

extend({ set: [iter] });

describe('Set.prototype.iter', () => {
  type TestSuccess = [string, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.iter()', new Set(), []],
    ['set {}.iter()', new Set<number>([]), []],
    ['set {2, 1, 2}.iter()', new Set([2, 1, 2]), [2, 1]],
    ['set {1, 2, 3}.iter()', new Set([1, 2, 3]), [1, 2, 3]],
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
