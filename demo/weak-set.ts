import { extend } from '../src/index.js';
import { isWeakSet } from '../src/weak-set.js';

extend({
  weakSet: [isWeakSet],
});

console.log([
  WeakSet.isWeakSet,
].every(n => 'function' === typeof(n)));
