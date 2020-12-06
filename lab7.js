
// Destructuring Objects

const person = {
    name: {
        first: 'hayk',
        last: 'abelyan'
    },
    age: 21
};

const {name: {first, last}, age} = person;
console.log(first, age);
