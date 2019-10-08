import {
  isBoolean,
} from '../src/boolean';
import { extend } from '../src/index.js';

// Extend Array.prototype with extensions.
extend({
  boolean: [
    isBoolean,
  ],
});

console.log([
  Boolean.isBoolean,
].every(n => 'function' === typeof(n)));
