import { PrototypeStruct } from '..';
import { extend, Extensions } from '../extend';

const dummy: PrototypeStruct = {
  label: 'dummy',
  fn: function dummyDummy() { return true; },
};
const staticDummy: PrototypeStruct = {
  isStatic: true,
  label: 'staticDummy',
  fn: function dummyStaticDummy() { return true; },
};

describe('extend', () => {
  type TestSuccess = [string, string, PrototypeStruct[], (...args: any[]) => any, boolean];
  test.each<TestSuccess>([
    ['Array.prototype.dummy', 'array', [dummy], () => Array.prototype.dummy(), true],
    ['Boolean.prototype.dummy', 'boolean', [dummy], () => Boolean.prototype.dummy(), true],
    ['Date.prototype.dummy', 'date', [dummy], () => Date.prototype.dummy(), true],
    ['Error.prototype.dummy', 'error', [dummy], () => Error.prototype.dummy(), true],
    ['Function.prototype.dummy', 'function', [dummy], () => Function.prototype.dummy(), true],
    ['<global>.dummy', 'iterator', [dummy], () => global.dummy(), true],
    ['Map.prototype.dummy', 'map', [dummy], () => Map.prototype.dummy(), true],
    ['Number.prototype.dummy', 'number', [dummy], () => Number.prototype.dummy(), true],
    ['Object.prototype.dummy', 'object', [dummy], () => Object.prototype.dummy(), true],
    ['Promise.prototype.dummy', 'promise', [dummy], () => Promise.prototype.dummy(), true],
    ['RegExp.prototype.dummy', 'regExp', [dummy], () => RegExp.prototype.dummy(), true],
    ['Set.prototype.dummy', 'set', [dummy], () => Set.prototype.dummy(), true],
    ['String.prototype.dummy', 'string', [dummy], () => String.prototype.dummy(), true],
    ['Symbol.prototype.dummy', 'symbol', [dummy], () => Symbol.prototype.dummy(), true],
    ['WeakMap.prototype.dummy', 'weakMap', [dummy], () => WeakMap.prototype.dummy(), true],
    ['WeakSet.prototype.dummy', 'weakSet', [dummy], () => WeakSet.prototype.dummy(), true],

    ['Object.dummy', 'object', [staticDummy], () => Object.staticDummy(), true],
  ])('%s', (_, a, b, c, expected) => {
    extend({ [a]: b } as unknown as Extensions);

    expect(c()).toStrictEqual(expected);
  });

  test('window', () => {
    if (!('window' in global)) (global as any).window = global;

    extend({ iterator: [dummy] });
    expect(Array.prototype.dummy()).toStrictEqual(true);

    delete (global as any).window;

    extend({ iterator: [dummy] });
    expect(Array.prototype.dummy()).toStrictEqual(true);
  });

  test(`Empty 'extensions'`, () => {
    const d = extend(null!);

    expect(d).toStrictEqual(undefined!);
  });
});

type DummyFn = () => true;
type StaticDummyFn = () => true;
declare global {
  interface Object {
    dummy: DummyFn;
  }

  interface ObjectConstructor {
    staticDummy: StaticDummyFn;
  }

  namespace NodeJS {
    interface Global {
      dummy: DummyFn;
    }
  }
}
