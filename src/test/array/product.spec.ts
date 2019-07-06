import { product, ProductFn } from '../../array/product';

const { label, fn } = product;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.product', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, (number | string | null | undefined)[], null | undefined | number | string];
  test.each<TestSuccess>([
    ['[undefined].product()', [undefined], undefined],
    ['[null].product()', [null], null],
    ['[null, undefined].product()', [null, void 0], NaN],
    ['[null, null].product()', [null, null], 0],

    ['[].product()', [], 0],
    ['[0].product()', [0], 0],
    ['[1, 2, 3].product()', [1, 2, 3], 6],
    [`[1, 2, 3, 'a'].product()`, [1, 2, 3, 'a'], NaN],
    [`[1, undefined, null, 'a'].product()`, [1, null, undefined, 'a'], NaN],
  ])('%s', (_, a, expected) => {
    const d = a.product();

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    product: ProductFn<T>;
  }
}