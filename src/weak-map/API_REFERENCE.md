# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [WeakMap](#weakmap)
  - [Constructor](#constructor)
    - [from(mapEntries\[, mapFn\])](#frommapentries-mapfn)
    - [isWeakMap(x)](#isweakmapx)
    - [of(element0[, element1[, ...[, elementN]]])](#ofelement0-element1--elementn)
  - [Prototype](#prototype)

## WeakMap

### Constructor

#### from(mapEntries\[, mapFn\])

Creates a `WeakMap` object that contains all key/ value pairs of `mapEntries` with each key must be an object and an optional `mapFn` to call on every element of the `mapEntries`.

```ts
const key1 = {};
const key2 = {};
const entries = [
  [key1, 1],
  [key2, 2],
];
const m = Map.from(entries, (n) => {
  const k = n[0];
  const v = n[1];

  return [k, 1 + v];
});

m.get(key1) === 2;
m.get(key2) === 3;
```

#### isWeakMap(x)

Returns `true` if `x` is a `WeakMap` object.

```ts
WeakMap.isWeakMap(new WeakMap()) === true;
```

#### of(element0[, element1[, ...[, elementN]]])

Creates a new `WeakMap` object from a variable number of arguments, regardless of the number of type of the arguments.

```ts
const key1 = {};
const key2 = {};
const m = WeakMap.of([key1, 1], [key2, 2]);

m.get(key1) === 1;
m.get(key2) === 2;
```

### Prototype

None
