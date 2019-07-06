import { PrototypeStruct } from '..';

type AnyPredicate<T> = (value: T) => boolean;
export type AnyFn<T> = (predicate: AnyPredicate<T>) => boolean;
// tslint:disable-next-line: variable-name
export const any: PrototypeStruct = {
  label: 'any',
  fn: function arrayAny<T>(predicate: AnyPredicate<T>): boolean {
    const ctx = this as unknown as T[];

    return ctx.some(predicate);
  },
};