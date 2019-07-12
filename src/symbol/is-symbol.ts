import { PrototypeStruct } from '..';

export type IsSymbolFn = (x: any) => boolean;
export const isSymbol: PrototypeStruct = {
  isStatic: true,
  label: 'isSymbol',
  fn: function symbolIsSymbol(x: any): boolean {
    return 'symbol' === typeof(x);
  },
};
