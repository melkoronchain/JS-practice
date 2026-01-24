//Unary Operators (one operand)

let x = 5;
x++;        // post-increment
++x;        // pre-increment
console.log(!true); // false

//Binary Operators (two operands)

console.log(5 + 3); // binary +
console.log(5 > 3); // binary >

//Ternary Operator (three operands)

const age = 18;
const access = age >= 18 ? 'allowed' : 'denied';

console.log(access); // allowed

const value = ' ';

value
? console.log('True') // True
: console.log('False');

let val = 60;
console.log(val>=0? val+11: val+10); // 71
