// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface IsBoolean {
  isBoolean(x: any): boolean;
}

export const isBoolean: PrototypeStruct = {
  isStatic: true,
  label: 'isBoolean',
  fn: function booleanIsBoolean(x: any): boolean {
    return null == x ? false : 'boolean' === typeof(x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface BooleanConstructor extends IsBoolean {}
}
