import { PrototypeStruct } from '../index.js';

type AnyPredicate<T> = (value: T) => boolean;
interface Any<T> {
  any(predicate: AnyPredicate<T>): boolean;
}

// tslint:disable-next-line: variable-name
export const any: PrototypeStruct = {
  label: 'any',
  fn: function arrayAny<T>(predicate: AnyPredicate<T>): boolean {
    const ctx = this as unknown as T[];

    return ctx.some(predicate);
  },
};

declare global {
  interface Array<T> extends Any<T> {}
}
