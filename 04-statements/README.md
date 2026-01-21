# Statements in JavaScript

This section contains examples of JavaScript statements.
Statements control the flow of program execution.

---

## try...catch Statement

The `try...catch` statement is used for error handling.
It allows you to safely execute code that may throw an error.

### Syntax

```js
try {
  // code that may throw an error
} catch (error) {
  // error handling
}
```
Example

```js
function throwError() {
  throw new Error('Something went wrong');
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

console.log('Program continues');
```
Output

Something went wrong
Program continues

Explanation
- throw generates an error
- try executes risky code
- catch handles the error
- Program execution continues after catch

⸻

# ✅ Summary
 - try...catch is a statement
 - Used for handling runtime errors
 - Prevents application crashes
 - Errors are represented by Error objects

