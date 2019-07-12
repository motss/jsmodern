import { PrototypeStruct } from '..';

export type CapitalizeFn = () => string;
export const capitalize: PrototypeStruct = {
  label: 'capitalize',
  fn: function stringCapitalize(): string {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    if (!len) return '';
    if (1 === len) return ctx.toUpperCase();

    const char0 = ctx.slice(0, 1);

    return `${char0.toUpperCase()}${ctx.slice(1).toLowerCase()}`;
  },
};

declare global {
  interface String {
    capitalize: CapitalizeFn;
  }
}
