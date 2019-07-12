import { PrototypeStruct } from '..';

export type IsMapFn = (x: any) => boolean;
export const isMap: PrototypeStruct = {
  isStatic: true,
  label: 'isMap',
  fn: function mapIsMap(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'Map' === x.constructor.name;
  },
};
