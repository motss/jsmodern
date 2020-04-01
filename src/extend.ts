import type { PrototypeStruct } from './index.js';

function toObject(name: keyof Extensions) {
  switch (name) {
    case 'array': return Array;
    case 'boolean': return Boolean;
    case 'date': return Date;
    case 'error': return Error;
    case 'function': return Function;
    case 'map': return Map;
    case 'number': return Number;
    case 'object': return Object;
    case 'promise': return Promise;
    case 'regExp': return RegExp;
    case 'set': return Set;
    case 'string': return String;
    case 'symbol': return Symbol;
    case 'weakMap': return WeakMap;
    case 'weakSet': return WeakSet;

    case 'iterator':
    default: {
      return 'undefined' === typeof(window) ? global : window;
    }
  }
}

interface FeatureListItem {
  type: unknown;
  features: PrototypeStruct[];
}
export interface Extensions {
  array: PrototypeStruct[];
  boolean: PrototypeStruct[];
  date: PrototypeStruct[];
  error: PrototypeStruct[];
  function: PrototypeStruct[];
  iterator: PrototypeStruct[];
  map: PrototypeStruct[];
  number: PrototypeStruct[];
  object: PrototypeStruct[];
  promise: PrototypeStruct[];
  regExp: PrototypeStruct[];
  set: PrototypeStruct[];
  string: PrototypeStruct[];
  symbol: PrototypeStruct[];
  weakMap: PrototypeStruct[];
  weakSet: PrototypeStruct[];
}
export function extend(extensions?: Partial<Extensions>) {
  const ext = extensions || {} as Extensions;
  const extKeys = Object.keys(ext) as unknown as (keyof Extensions)[];

  if (!extKeys.length) return;

  const featuresList = extKeys.map<FeatureListItem>((n) => {
    return { type: toObject(n), features: ext[n]! };
  });

  for (const { type, features } of featuresList) {
    for (const { fn, label, isStatic } of features) {
      const ctr = (type as unknown as ObjectConstructor);
      const root = isStatic || !ctr.prototype ? ctr : ctr.prototype;

      /** Skip registering new extension if it has been supported natively */
      if (label in root) continue;

      Object.defineProperty(root, label, {
        configurable: true,
        value: fn,
        writable: true,
      });
    }
  }
}
