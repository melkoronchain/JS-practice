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

## 4. Function as a Value

In JavaScript, functions are **first-class citizens**.
This means a function can be:
- stored in a variable
- passed around like any other value

```js
function myF() {
  console.log('Hello!');
}

const greet = myF;

greet(); // Hello!
```

Here, the function myF is assigned to a variable without calling it.
greet now references the same function.

## 5. Function as an Argument (Callback)

A function can be passed into another function as an argument.
When such a function is executed by another function, it is called a **callback**.

```js
function myF() {
  console.log('Hello!');
}

function greet(callback) {
  callback();
}

greet(myF); // Hello!
```

In this example:
 - myF is passed into greet as an argument
 - Inside greet, it is executed using callback()
 - Here, myF plays the role of a callback function

Callbacks are extremely common in JavaScript:
 - array methods (map, forEach, filter)
 - async code
 - event handlers

 ## 6. Strict Mode ('use strict')

 Strict mode helps catch common mistakes and prevents accidental global variables.

Example with 'use strict'

```js
 'use strict';

function strictExample() {
  a = true; // ❌ ReferenceError
  console.log(a);
}

strictExample();
```

What happens here:
 - Variable a is not declared with let, const, or var
 - In strict mode, this causes a ReferenceError
 - JavaScript does NOT allow implicit global variables

 Example without 'use strict'

```js
 function nonStrictExample() {
  a = true; // ✅ creates a global variable
  console.log(a);
}

nonStrictExample(); // true
console.log(a);     // true
```

What happens here:
 - JavaScript silently creates a global variable
 - This can lead to bugs and unexpected behavior

 Key Takeaways
 - 'use strict' prevents accidental global variables
 - Variables must be declared with let, const, or var
 - Strict mode helps catch bugs early
 - Modern JavaScript should always use strict mode

 ## 07 Default Parameters

Default parameters allow functions to define fallback values for arguments when they are not provided.

This feature helps make functions safer, more predictable, and easier to read.

Basic Example

Default parameters are used when an argument is undefined.

```js
function multiply(price, multiplier = 1) {
  return price * multiplier;
}

multiply(10);     // 10
multiply(10, 3);  // 30
 ```

 If multiplier is not passed, the default value 1 is used.

## Default Parameters with Objects

Default parameters are commonly used with objects to add optional properties without mutating the original object.

```js
function createPost(post, createdAt = new Date()) {
  return {
    ...post,
    createdAt
  };
}

const firstPost = {
  id: 1,
  author: 'Ruslan'
};

createPost(firstPost);
```
If createdAt is not provided, the current date is automatically added.

## ✅ Summary
 - Function declarations are hoisted
 - Function expressions are not hoisted
 - Arrow functions have a shorter syntax
 - Functions help organize and reuse logic
 - Functions can be treated like values
 - Functions can be passed as arguments
 - A callback is a function executed by another function
 - 'use strict' enables a safer version of JavaScript
 - Strict mode prevents accidental creation of global variables
 - All variables must be declared with let, const, or var
 - Without strict mode, undeclared variables become global
 - Using strict mode helps avoid bugs and unexpected behavior
 - Always use 'use strict' in modern JavaScript
 - Default parameters allow functions to use fallback values when arguments are not provided
 - Default values are applied only when the argument is undefined
 - They work the same way in all function types
 - Default parameters are commonly used with objects to add optional properties
 - Using default parameters helps write safer and more readable functions
 - The original objects are not mutated when using spread syntax


