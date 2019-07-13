import { PrototypeStruct } from '..';

export type ClearFn = () => void;
export const clear: PrototypeStruct = {
  label: 'clear',
  fn: function arrayClear<T>(): void {
    const ctx = this as unknown as T[];

    if (ctx.length > 0) ctx.length = 0;
  },
};

declare global {
  interface Array<T> {
    clear: ClearFn;
  }
}
