# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Promise](#promise)
  - [Constructor](#constructor)
    - [isPromise(x)](#ispromisex)
    - [delayed(delay, callback)](#delayeddelay-callback)
  - [Prototype](#prototype)

## Promise

### Constructor

#### isPromise(x)

Returns `true` if `x` is a `Promise`.

```ts
const a = Promise.resolve(1);

Promise.isPromise(a) === true;
```

#### delayed(delay, callback)

Creates a `Promise` that runs `callback` after `delay`.

```ts
Promise.delayed(3e3, () => {}); /** Runs callback after 3 seconds */
```

### Prototype

None
