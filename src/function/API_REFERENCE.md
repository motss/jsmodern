# API Reference

## Function

### Constructor

#### isAsyncFunction(x)

Returns `true` if `x` is an `async` function.

```ts
isAsyncFunction(async () => {}) === true;
isAsyncFunction(async function () {}) === true;

isAsyncFunction(() => {}) === false;
isAsyncFunction(() => Promise.resolve(1)) === false;
isAsyncFunction(async function* () {}) === false;
isAsyncFunction(class A {}) === false;
isAsyncFunction(function () {}) === false;
isAsyncFunction(function* () {}) === false;
```

#### isAsyncGeneratorFunction(x)

Returns `true` if `x` is an `async` `Generator` function.

```ts
isAsyncGeneratorFunction(async function* () => {}) === true;

isAsyncGeneratorFunction(() => {}) === false;
isAsyncGeneratorFunction(() => Promise.resolve(1)) === false;
isAsyncGeneratorFunction(async () => {}) === false;
isAsyncGeneratorFunction(async function () {}) === false;
isAsyncGeneratorFunction(class A {}) === false;
isAsyncGeneratorFunction(function () {}) === false;
isAsyncGeneratorFunction(function* () => {}) === false;
```

#### isFunction(x)

Returns `true` if `x` is a function.

```ts
isFunction(() => {}) === true;
isFunction(async () => {}) === true;
isFunction(async function () {}) === true;
isFunction(async function* () {}) === true;
isFunction(class A {}) === true;
isFunction(function () {}) === true;
isFunction(function* () {}) === true;
```

#### isGeneratorFunction(x)

Returns `true` if the value is an `Generator` function.

```ts
isGeneratorFunction(function* () => {}) === true;

isGeneratorFunction(() => {}) === false;
isGeneratorFunction(() => Promise.resolve(1)) === false;
isGeneratorFunction(async () => {}) === false;
isGeneratorFunction(async function () {}) === false;
isGeneratorFunction(async function* () => {}) === false;
isGeneratorFunction(class A {}) === false;
isGeneratorFunction(function () {}) === false;
```

### Prototype

None
