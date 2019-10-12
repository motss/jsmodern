import { extend } from '../src/index.js';
import {
  from,
  isWeakSet,
  of,
} from '../src/weak-set.js';

extend({
  weakSet: [
    from,
    isWeakSet,
    of,
  ],
});

console.log([
  WeakSet.from,
  WeakSet.isWeakSet,
  WeakSet.of,
].every(n => 'function' === typeof(n)));
