import { of, SetOf } from '../../set/of';

const { label, fn } = of;

Object.defineProperty(Set, label, { value: fn });

describe('Set.of', () => {
  // tslint:disable: only-arrow-functions no-empty max-classes-per-file
  const symbol = Symbol('a');
  const cls = class A {};
  const fatArrowFn = () => {};
  const unnamedFn = () => {};
  const fatArrowPromiseFn = () => Promise.resolve(1);
  const asyncFatArrowFn = async () => {};
  const asyncUnnamedFn = async function () {};
  // tslint:enable: only-arrow-functions no-empty max-classes-per-file

  type TestSuccess = [string, any, Set<any>, number];
  test.each<TestSuccess>([
    ['.of()', undefined, new Set(), 0],
    [`.of(new Map())`, new Map(), new Set(new Map()), 0],
    [`.of(new Set())`, new Set(), new Set(new Set()), 0],

    ['.of(NaN)', [NaN], new Set([NaN]), 1],
    ['.of(Infinity)', [Infinity], new Set([Infinity]), 1],
    ['.of(Promise.resolve(1))', [Promise.resolve(1)], new Set([Promise.resolve(1)]), 1],
    ['.of(true)', [true], new Set([true]), 1],
    ['.of(new Error())', [new Error()], new Set([new Error()]), 1],
    ['.of({ a: 1 })', [{ a: 1 }], new Set([{ a: 1 }]), 1],
    [`.of(Symbol('a'))`, [symbol], new Set([symbol]), 1],
    ['.of(class A {})', [cls], new Set([cls]), 1],
    ['.of(() => {})', [fatArrowFn], new Set([fatArrowFn]), 1],
    ['.of(function () {})', [unnamedFn], new Set([unnamedFn]), 1],
    ['.of(() => Promise.resolve(1))', [fatArrowPromiseFn], new Set([fatArrowPromiseFn]), 1],
    ['.of(async () => {})', [asyncFatArrowFn], new Set([asyncFatArrowFn]), 1],
    ['.of(async function () {})', [asyncUnnamedFn], new Set([asyncUnnamedFn]), 1],
    ['.of(null)', [null], new Set([null]), 1],
    [`.of('a')`, 'a', new Set('a'), 1],
    ['.of([])', [[]], new Set([[]]), 1],
    ['.of({})', [{}], new Set([{}]), 1],
    ['.of(1)', [1, 1], new Set([1]), 1],
    ['.of(1, 2)', [1, 2], new Set([1, 2]), 2],
    ['.of(1, 2, {}, {})', [1, 2, {}, {}], new Set([1, 2, {}, {}]), 4],
  ])('%s', (_, a, expected, f) => {
    const d = undefined === a ? Set.of() : Set.of(...a);

    expect(d).toEqual(expected);
    expect(d.size).toStrictEqual(f);
  });

});

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface SetConstructor extends SetOf {}
}
