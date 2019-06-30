import { numberIsNumber } from './is-number';

export function checkInt(n: number | null | undefined, name: string) {
  if (numberIsNumber(n)) return Number(n);

  throw new TypeError(`Expect '${name}' to be of type number`);
}
