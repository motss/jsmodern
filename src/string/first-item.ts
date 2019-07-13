import { PrototypeStruct } from '..';

export type FirstItemFn = () => string;
export const firstItem: PrototypeStruct = {
  label: 'firstItem',
  fn: function stringFirstItem(): string {
    const ctx = (this as unknown as string);

    return !ctx.length ? '' : ctx[0];
  },
};

declare global {
  interface String {
    firstItem: FirstItemFn;
  }
}
