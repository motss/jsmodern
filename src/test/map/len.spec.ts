import { extend } from '../../extend.js';
import { len } from '../../map/len.js';

extend({ map: [len] });

describe('Map.prototype.len', () => {
  type TestSuccess = [string, Map<number, number>, number];
  test.each<TestSuccess>([
    ['{}.len()', new Map(), 0],
    ['{1=>1, 2=>2}.len()', new Map([[1, 1], [2, 2]]), 2],
  ])('%s', (_, a, expected) => {
    const d = a.len();

    expect(d).toStrictEqual(expected!);
  });

});
