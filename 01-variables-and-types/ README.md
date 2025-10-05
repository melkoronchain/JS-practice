# 01 – Variables and Types in JavaScript

---

## 1. `let` vs `const`

- `let` allows you to reassign a value later.
- `const` is used when the value **must not change**.

### 🔹 Example

```js
let a = 10;
a = 20; // ✅ valid

const b = 30;
b = 40; // ❌ throws an error: can't reassign a const

✅ Use const by default, and switch to let only if you need reassignment.


2. Primitive Types

Primitive values are stored by value and include types like:

- string

- number

- boolean

- undefined

🔹 Example

let name = 'Melkor';         // string
let age = 1000;              // number
let isDarkLord = true;       // boolean
let weapon;                  // undefined

Use typeof to check the type:

