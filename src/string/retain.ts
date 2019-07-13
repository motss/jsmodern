import { PrototypeStruct } from '..';

export type RetainFn = (callback: (character: string) => boolean) => string;
export const retain: PrototypeStruct = {
  label: 'retain',
  fn: function stringRetain(callback: (character: string) => boolean): string {
    const ctx = this as unknown as string;

    if (!ctx.length) return '';

    return ctx.split('').filter(callback).join('');
  },
};

declare global {
  interface String {
    retain: RetainFn;
  }
}
