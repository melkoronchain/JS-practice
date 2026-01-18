// Example with 'use strict'

'use strict';

function strictExample() {
  a = true; // ❌ ReferenceError
  console.log(a);
}

strictExample();


// Example without 'use strict'

function nonStrictExample() {
  a = true; // ✅ creates global variable
  console.log(a);
}

nonStrictExample(); // true
console.log(a);     // true
