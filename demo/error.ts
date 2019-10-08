import {
  isError,
} from '../src/error.js';
import { extend } from '../src/index.js';

extend({
  error: [
    isError,
  ],
});

console.log([
  Error.isError,
].every(n => 'function' === typeof(n)));
