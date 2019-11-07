import { PrototypeStruct } from '../index.js';

interface Clear {
  clear(): void;
}

export const clear: PrototypeStruct = {
  label: 'clear',
  fn: function arrayClear<T>(): void {
    const ctx = this as unknown as T[];

    if (ctx.length > 0) ctx.length = 0;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends Clear {}
}
