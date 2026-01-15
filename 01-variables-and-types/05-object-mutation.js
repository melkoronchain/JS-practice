const myInfo = {
    name: 'Alex',
    age: 25,
    city: 'New York'
}

myInfo.age = 27;

console.log(myInfo.age); // 27

myInfo.career = 'Developer';

console.log (myInfo); // { name: 'Alex', age: 27, city: 'New York', career: 'Developer' }

delete myInfo.city;

console.log (myInfo); // { name: 'Alex', age: 27, career: 'Developer' }