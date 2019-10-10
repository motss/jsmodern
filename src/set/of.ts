import { PrototypeStruct } from '..';

interface SetOf {
  of<T>(...elements: T[]): Set<T>;
}

export const of: PrototypeStruct = {
  isStatic: true,
  label: 'of',
  fn: function setOf<T>(...elements: T[]): Set<T> {
    return new Set(elements);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface SetConstructor extends SetOf {}
}
