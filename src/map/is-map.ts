import { PrototypeStruct } from '../index.js';

interface IsMap {
  isMap(x: any): boolean;
}

export const isMap: PrototypeStruct = {
  isStatic: true,
  label: 'isMap',
  fn: function mapIsMap(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'Map' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends IsMap {}
}
