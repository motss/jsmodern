import { extend } from '../src/index.js';
import {
  delayed,
  isPromise,
} from '../src/promise.js';

extend({
  promise: [
    delayed,
    isPromise,
  ],
});

console.log([
  Promise.delayed,
  Promise.isPromise,
].every(n => 'function' === typeof(n)));
