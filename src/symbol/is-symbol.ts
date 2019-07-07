import { PrototypeStruct } from '..';

export type IsSymbolFn = (x: any) => boolean;
export const isSymbol: PrototypeStruct = {
  label: 'isSymbol',
  fn: function numberIsSymbol(x: any): boolean {
    return 'symbol' === typeof(x);
  },
};
