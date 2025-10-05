
# 01 - Variables and Types in JavaScript

## 1. `let` vs `const`

- `let` allows you to reassign a value later.
- `const` is used when the value **must not change**.

```js
let a = 10;
a = 20; // ✅ valid

const b = 30;
b = 40; // ❌ throws an error: can't reassign a const

Use const by default, and switch to let only if you need reassignment.


2. Primitive Types

Primitive values are stored by value and include types like:

string

number

boolean

undefined

let name = 'Melkor';         // string
let age = 1000;              // number
let isDarkLord = true;       // boolean
let weapon;                  // undefined

Use typeof to check the type:

console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isDarkLord);  // "boolean"
console.log(typeof weapon);      // "undefined"


3. Reference Types (Objects)

Objects are stored by reference. This means if you assign one object to another variable, both point to the same memory.

const obj1 = { power: 'darkness' };
const obj2 = obj1;

obj2.power = 'ultimate darkness';

console.log(obj1.power); // "ultimate darkness"

Even though we modified obj2, obj1 changed too — because both point to the same object.


4. Scope: Global vs Local

Variables declared inside a function are local and don't affect the global ones, even with the same name.

let power = 'infinite';

function testScope() {
    let power = 'limited';
    console.log('Inside:', power); // "limited"
}

testScope();
console.log('Outside:', power); // "infinite"

The inner power shadows the outer one — they are different variables.


✅ Summary

Use const by default, and let if needed.

Primitives are copied by value.

Objects are copied by reference.

Function scope creates isolated variables.