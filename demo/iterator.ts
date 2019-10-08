import { extend } from '../src/index.js';
import {
  isAsyncIterator,
  isIterator,
} from '../src/iterator.js';

extend({
  iterator: [
    isAsyncIterator,
    isIterator,
  ],
});

console.log([
  isAsyncIterator,
  isIterator,
].every(n => 'function' === typeof(n)));
