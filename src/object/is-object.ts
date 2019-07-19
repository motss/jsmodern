import { PrototypeStruct } from '..';

export type IsObjectFn = (x: any) => boolean;
export const isObject: PrototypeStruct = {
  isStatic: true,
  label: 'isObject',
  fn: function objectIsObject(x: any): boolean {
    if (null == x) return false;

    const isObjectType = 'object' === typeof(x);
    const isNotArray = !Array.isArray(x);
    const isObjectObject = '[object Object]' === Object.prototype.toString.call(x);

    return isObjectType && isNotArray && isObjectObject;
  },
};

declare global {
  interface Object {
    isObject: IsObjectFn;
  }
}
