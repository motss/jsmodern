import { PrototypeStruct } from '..';

export type IsObjectFn = (x: any) => boolean;
export const isObject: PrototypeStruct = {
  label: 'isObject',
  fn: function numberIsObject(x: any): boolean {
    const isObjectType = 'object' === typeof(x);
    const isArray = Array.isArray(x);
    const isNull = null == x;
    const isPromise = Boolean(x && x.then);

    return isObjectType && !isArray && !isNull && !isPromise;
  },
};
