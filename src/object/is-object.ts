import { PrototypeStruct } from '..';

export type IsObjectFn = (x: any) => boolean;
export const isObject: PrototypeStruct = {
  isStatic: true,
  label: 'isObject',
  fn: function objectIsObject(x: any): boolean {
    if (null == x) return false;

    const isObjectType = 'object' === typeof(x);
    const isArray = Array.isArray(x);
    const isPromise = Boolean(x && x.then);

    return isObjectType && !isArray && !isPromise;
  },
};
