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
	•	myF is passed into greet as an argument
	•	Inside greet, it is executed using callback()
	•	Here, myF plays the role of a callback function

Callbacks are extremely common in JavaScript:
	•	array methods (map, forEach, filter)
	•	async code
	•	event handlers

## ✅ Summary
 - Function declarations are hoisted
 - Function expressions are not hoisted
 - Arrow functions have a shorter syntax
 - Functions help organize and reuse logic
 - Functions can be treated like values
 - Functions can be passed as arguments
 - A callback is a function executed by another function
