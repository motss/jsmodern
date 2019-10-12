import { extend } from '../src/index.js';
import {
  from,
  isWeakMap,
  of,
} from '../src/weak-map.js';

extend({
  weakMap: [
    from,
    isWeakMap,
    of,
  ],
});

console.log([
  WeakMap.from,
  WeakMap.isWeakMap,
  WeakMap.of,
].every(n => 'function' === typeof(n)));
