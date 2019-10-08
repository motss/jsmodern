# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Number](#number)
  - [Constructor](#constructor)
    - [isNumber(value)](#isnumbervalue)
    - [range(start[, stop, step])](#rangestart-stop-step)
  - [Prototype](#prototype)
    - [divFloor(divisor)](#divfloordivisor)
    - [divModFloor(divisor)](#divmodfloordivisor)
    - [divRem(divisor)](#divremdivisor)
    - [gcd(divisor)](#gcddivisor)
    - [isBetween(min, max)](#isbetweenmin-max)
    - [isEven()](#iseven)
    - [isMultipleOf(other)](#ismultipleofother)
    - [isOdd()](#isodd)
    - [lcm(divisor)](#lcmdivisor)
    - [modFloor(divisor)](#modfloordivisor)

## Number

### Constructor

#### isNumber(value)

Returns `true` if `value` is a number.

```ts
Number.isNumber(3) === true;
```

#### range(start[, stop, step])

Returns a sequence of numbers, starting from `0` by default, and increments by `1` by default, and ends at a specified number.

```ts
range(6); /** [0, 1, 2, 3, 4, 5] */
range(0, 3); /** [0, 1, 2] */
range(1, 5, 2); /** [1, 3] */
```

### Prototype

#### divFloor(divisor)

Floored integer division.

```ts
(8).divFloor(3) === 2;
```

#### divModFloor(divisor)

Simultaneous floored integer division and modulus. Returns `[quotient, remainder]`.

```ts
(8).divModFloor(3); /** [2, 2] */
```

#### divRem(divisor)

Simultaneous truncated integer division and modulus. Returns `[quotient, remainder]`.

```ts
(8).divRem(3); /** [2, 2] */
```

#### gcd(divisor)

Greatest Common Divisor (GCD).

```ts
(6).gcd(8) === 2;
```

#### isBetween(min, max)

Returns `true` if the number is between `min` (inclusive) and `max` (exclusive).

```ts
(8).isBetween(0, 9) === true;
```

#### isEven()

Returns `true` if the number is even.

```ts
(3).isEven() === false;
```

#### isMultipleOf(other)

Returns `true` if `other` is multiple of `self`.

```ts
(9).isMultipleOf(3) === true;
```

#### isOdd()

Returns `true` if the number is odd.

```ts
(3).isOdd() === true;
```

#### lcm(divisor)

Lowest Common Multiple (LCM).

```ts
(7).lcm(3) === 21;
```

#### modFloor(divisor)

Floored integer modulo.

```ts
(8).modFLoor(3) === 2;
```
