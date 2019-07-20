import { PrototypeStruct } from '..';

export type RetainPredicate = (predicate: (character: string) => boolean) => string;
export const retain: PrototypeStruct = {
  label: 'retain',
  fn: function stringRetain(predicate: (character: string) => boolean): string {
    const ctx = this as unknown as string;

    if (!ctx.length) return '';

    return ctx.split('').filter(predicate).join('');
  },
};

declare global {
  interface String {
    retain: RetainPredicate;
  }
}
