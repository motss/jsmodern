# API Reference

## Iterator

### Constructor

#### from(mapEntries\[, mapFn\])

Creates a `Map` object that contains all key/ value pairs of `mapEntries` and an optional `mapFn` to call on every element of the `mapEntries`.

```ts
const entries = [
  [1, 1],
  [2, 2],
];
const m = Map.from(entries, (n) => {
  const k = n[0];
  const v = n[1];

  return [k, 1 + v];
});

m.get(1) === 2;
m.get(2) === 3;
```

#### isMap(x)

Returns `true` if the `x` is a `Map` object.

```ts
Map.isMap(new Map()) === true;
```

#### of(element0[, element1[, ...[, elementN]]])

Creates a new `Map` object from a variable number of arguments, regardless of the number of type of the arguments.

```ts
const m = Map.of([1, 1], [2, 2]);

m.get(1) === 1;
m.get(2) === 2;
```

### Prototype

#### entry(key)

Gets the given `key`'s corresponding entry in the map, or `[key, undefined]` if this map contains no mapping for the key.

```ts
const m = new Map();

m.set(1, 1);
m.set(2, 2);

m.entry(1); /** [1, 1] */
m.entry(3); /** [3, undefined] */
```

#### entryOrDefault(key, defaultValue)

Gets the given `key`'s corresponding entry in the map, or `[key, defaultValue]` if this map contains no mapping for the key.

```ts
const m = new Map();

m.set(1, 1);
m.set(2, 2);

m.entry(1); /** [1, 1] */
```

#### getOrDefault(key, defaultValue)

Returns the value to which the specified key is mapped, or `defaultValue` if this map contains no mapping for the key.

```ts
const m = new Map();

'hello world'.split('').filter(Boolean).forEach((n) => {
  const count = 1 + m.getOrDefault(n, 0);

  m.set(n, key);
});

m.get('o') === 2;
m.get('l') === 3;
```

#### isEmpty()

Returns `true` if the map contains no elements.

```ts
const m = new Map();

m.isEmpty() === true;

m.set(1, 1);
m.set(2, 2);

m.isEmpty() === false;
```

#### iter()

Returns an iterator visiting all key-value pairs.

```ts
const m = new Map();

m.set(1, 1);
m.set(2, 2);

const iter = m.iter();

iter.next().value; /** [1, 1] */
iter.next().value; /** [2, 2] */
iter.next().done() === true;
```

#### len()

Returns the number of elements in the map.

```ts
const m = new Map();

m.len() === 0;

m.set(1, 1);
m.set(2, 2);

m.len() === 2;
```

#### removeEntry(key)

Removes the given `key` from the map, returning the stored key and the value if the key was previously in the map.

```ts
const m = new Map();

m.set(1, 1);
m.set(2, 2);

m.removeEntry(1); /** [1, 1] */
m.has(1) === false;
```

#### toArray()

Creates an array containing all the elements of the map.

```ts
const m = new Map();

m.set(1, 1);
m.set(2, 2);

m.toArray(); /** [[1, 1], [2, 2]] */
```
