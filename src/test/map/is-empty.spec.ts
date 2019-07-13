import { extend } from '../../extend';
import { isEmpty } from '../../map/is-empty';

extend({ map: [isEmpty] });

describe('Map.prototype.isEmpty', () => {
  type TestSuccess = [string, Map<number, number>, boolean];
  test.each<TestSuccess>([
    ['{}.isEmpty()', new Map(), true],
    ['{1=>1, 2=>2}.isEmpty()', new Map([[1, 1], [2, 2]]), false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();

    expect(d).toStrictEqual(expected!);
  });

});
