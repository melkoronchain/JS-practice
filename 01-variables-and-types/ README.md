# JavaScript Practice Notes

## 1. `let` vs `const`

- `let` allows you to reassign a value later.
- `const` is used when the value must **not** change.

```js
let a = 10;
a = 20; // ✅ valid

const b = 30;
// b = 40; ❌ Error: Assignment to constant variable
```

🟩 Use `const` by default. Use `let` only when reassignment is needed.

---

## 2. Primitive Types

Primitive values are stored by value. They include:

- `string`
- `number`
- `boolean`
- `undefined`

```js
let name = 'Melkor';         // string
let age = 1000;              // number
let isDarkLord = true;       // boolean
let weapon;                  // undefined
```

Check types using `typeof`:

```js
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isDarkLord);  // "boolean"
console.log(typeof weapon);      // "undefined"
```

---

## 3. Reference Types (Objects)

Objects are stored by reference.

```js
const obj1 = { power: 'darkness' };
const obj2 = obj1;

obj2.power = 'ultimate darkness';

console.log(obj1.power); // "ultimate darkness"
```

🔁 Even though we modified `obj2`, `obj1` also changed — they both point to the same object.

---

## 4. Scope: Global vs Local

Variables declared inside a function are **local** and don’t affect the **global** ones — even with the same name.

```js
let power = 'infinite';

function testScope() {
  let power = 'limited';
  console.log('Inside:', power); // "limited"
}

testScope();
console.log('Outside:', power); // "infinite"
```

🧠 The inner `power` variable **shadows** the global one. They are different.

---

## 5. Object mutation (reference types)

Objects in JavaScript are **reference types**.  
Even if an object is declared using `const`, its properties can still be changed.

```js
const myInfo = {
  name: 'Alex',
  age: 25,
  city: 'New York'
}

myInfo.age = 27;
console.log(myInfo.age); // 27

myInfo.career = 'Developer';
console.log(myInfo);
// { name: 'Alex', age: 27, city: 'New York', career: 'Developer' }

delete myInfo.city;
console.log(myInfo);
// { name: 'Alex', age: 27, career: 'Developer' }
```
 Key points:
	•	const prevents reassignment, not mutation
	•	Objects are stored by reference
	•	Properties can be added, updated, or deleted

	---

	## 6. Object Copying

Objects in JavaScript are stored by **reference**, so copying them requires special care.

### Shallow copy (one level)

```js
const copy1 = Object.assign({}, original);
const copy2 = { ...original };
```
	•	Copies only the first level
	•	Nested objects are still shared

```js
const deepCopy = JSON.parse(JSON.stringify(original));
```

	•	Creates a fully independent copy
	•	Nested objects are also copied
	•	Not suitable for functions, dates, undefined, etc.

🧠 Choose the method based on your data structure.

## ✅ Summary

- Use `const` by default, `let` if reassignment is needed.
- Primitive types are copied by **value**.
- Objects are copied by **reference**.
- Functions create their own **scope**.
-- Objects can be mutated even when declared with `const`.
- `const` protects the variable binding, not the object itself.
- Adding, updating, and deleting properties changes the same object reference.
- Objects can be **copied in different ways** depending on the task.
