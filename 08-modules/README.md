# JavaScript Modules (ESM)

This example demonstrates how ES modules work in JavaScript using `.mjs` files.

It shows:
- default exports
- named exports
- importing multiple values
- renaming imports

---

## moduleOne.mjs

```js
function sum(a, b) {
  return a + b;
}

export default sum;

const one = 10;
const two = null;

export {
  one,
  two
};
```

- sum is exported as default
- one and two are named exports
- A module can have one default export and multiple named exports

## moduleTwo.mjs

```js
import sum from './moduleOne.mjs';

import {
  one as renamedOne,
  two
} from './moduleOne.mjs';

const trueSum = sum(19, 100);
console.log(trueSum);

console.log(renamedOne);
console.log(two);
```

- Default import can be renamed freely
- Named imports must match export names (unless renamed with as)
- Multiple imports can come from the same module

⸻

## Summary
- export default → one main value per module
- export { ... } → multiple named exports
- Default imports can be renamed freely
- Named imports can be renamed using as
- ES modules help split code into reusable files