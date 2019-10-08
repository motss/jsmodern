import {
  difference,
  isAfter,
  isBefore,
  isDate,
} from '../src/date.js';
import { extend } from '../src/index.js';

extend({
  date: [
    difference,
    isAfter,
    isBefore,
    isDate,
  ],
});

console.log([
  Date.prototype.difference,
  Date.prototype.isAfter,
  Date.prototype.isBefore,
  Date.isDate,
].every(n => 'function' === typeof(n)));
