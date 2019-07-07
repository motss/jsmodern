import { PrototypeStruct } from '..';

export type IsBooleanFn = (x: any) => boolean;
export const isBoolean: PrototypeStruct = {
  label: 'isBoolean',
  fn: function numberIsBoolean(x: any): boolean {
    if (null == x) return false;

    const xType = typeof(x);

    return 'boolean' === xType ||
           ('object' === xType &&
            'Boolean' === x.constructor.name) &&
            x.valueOf();
  },
};
