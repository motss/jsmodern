import { extend } from '../src/index.js';
import {
  divFloor,
  divModFloor,
  divRem,
  gcd,
  isBetween,
  isEven,
  isMultipleOf,
  isNumber,
  isOdd,
  lcm,
  modFloor,
  range,
} from '../src/number.js';

extend({
  number: [
    divFloor,
    divModFloor,
    divRem,
    gcd,
    isBetween,
    isEven,
    isMultipleOf,
    isNumber,
    isOdd,
    lcm,
    modFloor,
    range,
  ],
});

console.log([
  Number.prototype.divFloor,
  Number.prototype.divModFloor,
  Number.prototype.divRem,
  Number.prototype.gcd,
  Number.prototype.isBetween,
  Number.prototype.isEven,
  Number.prototype.isMultipleOf,
  Number.isNumber,
  Number.prototype.isOdd,
  Number.prototype.lcm,
  Number.prototype.modFloor,
  Number.range,
].every(n => 'function' === typeof(n)));
