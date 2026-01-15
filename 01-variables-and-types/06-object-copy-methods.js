const profile = {
    user: 'Alex',
    country: 'USA',
    age: 29
};

const copyProfile = Object.assign({},profile);

copyProfile.age = 30;

console.log(profile); // { user: 'Alex', country: 'USA', age: 29 }
console.log(copyProfile); // { user: 'Alex', country: 'USA', age: 30 }


const profile2 = {
    user: 'Bob',
    country: 'Canada',
    age: 40
};

const copyProfile2 = {...profile2};

copyProfile2.country = 'Sweden'

console.log(profile2); // { user: 'Bob', country: 'Canada', age: 40 }
console.log(copyProfile2); // { user: 'Bob', country: 'Sweden', age: 40 }


const profile3 = {
    user: 'Jonh',
    country: 'Germany',
    age: 18,
    info: {
        city: 'Berlin'
    }
};

const copyProfile3 = JSON.parse(JSON.stringify(profile3));

copyProfile3.info.city = 'Munich'

console.log(profile3); // { user: 'Jonh', country: 'Germany', age: 18, info: { city: 'Berlin' } }
console.log(copyProfile3); // { user: 'Jonh', country: 'Germany', age: 18, info: { city: 'Munich' } }
