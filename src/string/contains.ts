// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface Contains {
  contains(s: string): boolean;
}

export const contains: PrototypeStruct = {
  label: 'contains',
  fn: function stringContains(s: string): boolean {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    if (!len || s.length > len) return false;

    return ctx.indexOf(s) >= 0;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends Contains {}
}
