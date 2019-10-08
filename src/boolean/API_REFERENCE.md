# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Boolean](#boolean)
  - [Constructor](#constructor)
    - [isBoolean(x)](#isbooleanx)
  - [Prototype](#prototype)

## Boolean

### Constructor

#### isBoolean(x)

Returns `true` if the `x` is a boolean.

```ts
Boolean.isBoolean(true) === true;
Boolean.isBoolean(false) === true;

Boolean.isBoolean(0) === false;
Boolean.isBoolean('0') === false;
```

### Prototype

None
