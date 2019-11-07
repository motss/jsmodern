import { PrototypeStruct } from '../index.js';

interface Len {
  len(): number;
}

export const len: PrototypeStruct = {
  label: 'len',
  fn: function mapLen<K, V>(): number {
    const ctx = this as unknown as Map<K, V>;

    return ctx.size;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Map<K, V> extends Len {}
}
