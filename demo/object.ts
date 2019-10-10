import { extend } from '../src/index.js';
import { isObject } from '../src/object';

extend({
  object: [isObject],
});

console.log([
  Object.isObject,
].every(n => 'function' === typeof(n)));
