//typeof
//Returns the type of a value.

console.log(typeof 10);        // "number"
console.log(typeof 'hello');   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"

//instanceof

//Checks if an object was created from a constructor.

const arr = [];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

//delete

//Removes a property from an object.

const user = {
  name: 'Alex',
  age: 30
};

delete user.age;

console.log(user); // { name: 'Alex' }

//new

//Creates a new object from a constructor function.

function User(name) {
  this.name = name;
}

const user = new User('Alex');
console.log(user.name); // Alex