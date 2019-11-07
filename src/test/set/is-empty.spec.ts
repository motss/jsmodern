import { extend } from '../../extend.ts';
import { isEmpty } from '../../set/is-empty.ts';

extend({ set: [isEmpty] });

describe('Set.prototype.isEmpty', () => {
  type TestSuccess = [string, Set<number>, boolean];
  test.each<TestSuccess>([
    ['set {}.isEmpty()', new Set(), true],
    ['set {1, 2}.isEmpty()', new Set<number>([]), true],
    ['set {1, 2, 3}.isEmpty()', new Set([1, 2, 3]), false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();

    expect(d).toStrictEqual(expected!);
  });

});
