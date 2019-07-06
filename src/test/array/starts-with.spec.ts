import { startsWith, StartsWithFn } from '../../array/starts-with';

const { label, fn } = startsWith;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.startsWith', () => {
  const errorMessage = new TypeError(`Expect 'needle' to be an array`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, number[], undefined | null | number, TypeError];
  test.each<TestError>([
    ['.startsWith()', [], undefined, errorMessage],
    ['.startsWith(null)', [], null, errorMessage],
    ['.startsWith(0)', [], 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.startsWith(b! as unknown as any[]);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, number[], number[], boolean];
  test.each<TestSuccess>([
    ['[].startsWith([])', [], [], true],
    ['[0].startsWith([])', [0], [], true],

    ['[0].startsWith([0])', [0], [0], true],
    ['[0].startsWith([1])', [0], [1], false],
    ['[0].startsWith([1, 2])', [0], [1, 2], false],
    ['[1, 2, 3].startsWith([1, 2])', [1, 2, 3], [1, 2], true],
    ['[1, 2, 3].startsWith([1, 3])', [1, 2, 3], [1, 3], false],
  ])('%s', (_, a, b, expected) => {
    const d = a.startsWith(b!);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    startsWith: StartsWithFn<T>;
  }
}
