import {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isGeneratorFunction,
} from '../src/function.js';
import { extend } from '../src/index.js';

extend({
  function: [
    isAsyncFunction,
    isAsyncGeneratorFunction,
    isFunction,
    isGeneratorFunction,
  ],
});

console.log([
  Function.isAsyncFunction,
  Function.isAsyncGeneratorFunction,
  Function.isFunction,
  Function.isGeneratorFunction,
].every(n => 'function' === typeof(n)));
