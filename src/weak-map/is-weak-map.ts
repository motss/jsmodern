import { PrototypeStruct } from '..';

export type IsWeakMapFn = (x: any) => boolean;
export const isWeakMap: PrototypeStruct = {
  label: 'isWeakMap',
  fn: function mapIsWeakMap(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'WeakMap' === x.constructor.name;
  },
};
