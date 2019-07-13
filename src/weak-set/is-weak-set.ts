import { PrototypeStruct } from '..';

export type IsWeakSetFn = (x: any) => boolean;
export const isWeakSet: PrototypeStruct = {
  isStatic: true,
  label: 'isWeakSet',
  fn: function mapIsWeakSet(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'WeakSet' === x.constructor.name;
  },
};

declare global {
  interface WeakSetConstructor {
    isWeakSet: IsWeakSetFn;
  }
}
