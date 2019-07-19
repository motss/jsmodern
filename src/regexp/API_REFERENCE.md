# API Reference

## RegExp

### Constructor

#### isRegExp(x)

Returns `true` if `x` is a regular expression.

```ts
RegExp.isRegExp(/a/gi) === true;
RegExp.isRegExp(new RegExp('a', 'gi')) === true;
RegExp.isRegExp(new RegExp(/a/i, 'gi')) === true;
```

### Prototype

None
