import type { PrototypeStruct } from '../index.js';

interface IsSymbol {
  isSymbol(x: any): boolean;
}

export const isSymbol: PrototypeStruct = {
  isStatic: true,
  label: 'isSymbol',
  fn: function symbolIsSymbol(x: any): boolean {
    return 'symbol' === typeof(x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface SymbolConstructor extends IsSymbol {}
}
