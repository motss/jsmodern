import { PrototypeStruct } from '..';

export type ContainsFn = (s: string) => boolean;
export const contains: PrototypeStruct = {
  label: 'contains',
  fn: function stringContains(s: string): boolean {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    if (!len || s.length > len) return false;

    return ctx.indexOf(s) >= 0;
  },
};
