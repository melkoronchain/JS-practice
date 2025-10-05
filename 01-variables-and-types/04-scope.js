// Global vs Local scope

let power = 'infinite';

function testScope() {
    let power = 'limited';
    console.log('Inside:', power); // limited
}

testScope();
console.log('Outside:', power); // infinite