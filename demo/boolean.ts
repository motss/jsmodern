import {
  isBoolean,
} from '../src/boolean.js';
import { extend } from '../src/index.js';

extend({
  boolean: [
    isBoolean,
  ],
});

console.log([
  Boolean.isBoolean,
].every(n => 'function' === typeof(n)));
