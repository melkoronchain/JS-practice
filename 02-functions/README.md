# Functions in JavaScript

This section covers the main ways to declare functions in JavaScript.

---

## 1. Function Declaration

Function declaration uses the `function` keyword.

- Can be called **before** it is defined (hoisting).
- Commonly used for utility functions.

```js
function sum(a, b) {
  return a + b;
}

sum(10, 2); // 12
```

✅ The function returns a value using return.

## 2. Function Expression

Function expression is when a function is assigned to a variable.
 - Stored in a variable
 - Cannot be used before declaration

```js
const createUser = function (name, age) {
  return {
    name,
    age
  };
};

createUser('Alex', 28);
```

This pattern is often used when functions are treated as values.

## 3. Arrow Function

Arrow functions provide a shorter syntax.
	- Shorter and cleaner
	- Do not have their own `this`


```js
const greetings = () => {
  console.log('Hello, World!');
};

greetings();
```

## ✅ Summary
 - Function declarations are hoisted
 - Function expressions are not hoisted
 - Arrow functions have a shorter syntax
 - Functions help organize and reuse logic