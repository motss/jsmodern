import { PrototypeStruct } from '../index.ts';

interface IsWeakMap {
  isWeakMap(x: any): boolean;
}

export const isWeakMap: PrototypeStruct = {
  isStatic: true,
  label: 'isWeakMap',
  fn: function mapIsWeakMap(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'WeakMap' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakMapConstructor extends IsWeakMap {}
}
