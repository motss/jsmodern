import { PrototypeStruct } from '..';

export type IsObjectFn = (x: any) => boolean;
export const isObject: PrototypeStruct = {
  label: 'isObject',
  fn: function numberIsObject(x: any): boolean {
    if (null == x) return false;

    const isObjectType = 'object' === typeof(x);
    const isArray = Array.isArray(x);
    const isPromise = Boolean(x && x.then);

    return isObjectType && !isArray && !isPromise;
  },
};
