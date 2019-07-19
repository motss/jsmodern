# API Reference

## Promise

### Constructor

#### isPromise(x)

Returns `true` if `x` is a `Promise`.

```ts
const a = Promise.resolve(1);

Promise.isPromise(a) === true;
```

#### delayed(delay, callback)

Creates a `Promise` that runs its computation after `delay`.

```ts
Promise.delayed(3e3, () => {}); /** Runs callback after 3 seconds */
```

### Prototype

None
