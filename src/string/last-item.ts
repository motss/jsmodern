import type { PrototypeStruct } from '../index.js';

interface LastItem {
  lastItem(): string;
}

export const lastItem: PrototypeStruct = {
  label: 'lastItem',
  fn: function stringLastItem(): string {
    const ctx = (this as unknown as string);

    return ctx.length < 2 ? ctx : ctx[ctx.length - 1];
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends LastItem {}
}
