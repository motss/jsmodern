import { PrototypeStruct } from '../index.js';

type RetainPredicate = (character: string) => boolean;
interface Retain {
  retain(predicate: RetainPredicate): string;
}

export const retain: PrototypeStruct = {
  label: 'retain',
  fn: function stringRetain(predicate: RetainPredicate): string {
    const ctx = this as unknown as string;

    if (!ctx.length) return '';

    return ctx.split('').filter(predicate).join('');
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends Retain {}
}
