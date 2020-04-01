import type { PrototypeStruct } from '../index.js';

export function utilIsSet<T>(x: any): x is Set<T> {
  return null == x ? false : 'object' === typeof(x) && 'Set' === x.constructor.name;
}

interface IsSet {
  isSet(x: any): boolean;
}

export const isSet: PrototypeStruct = {
  isStatic: true,
  label: 'isSet',
  fn: utilIsSet,
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface SetConstructor extends IsSet {}
}
