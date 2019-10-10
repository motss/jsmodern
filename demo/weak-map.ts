import { extend } from '../src/index.js';
import { isWeakMap } from '../src/weak-map.js';

extend({
  weakMap: [isWeakMap],
});

console.log([
  WeakMap.isWeakMap,
].every(n => 'function' === typeof(n)));
