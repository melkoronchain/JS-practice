// Reference types (objects)

const obj1 = { power: 'darkness' };
const obj2 = obj1;

obj2.power = 'ultimate darkness';

console.log(obj1.power); // 'ultimate darkness'