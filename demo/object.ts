import { extend } from '../src/index.js';
import { isObject } from '../src/object.js';

extend({
  object: [isObject],
});

console.log([
  Object.isObject,
].every(n => 'function' === typeof(n)));
