
// Array Destructuring

const person = {
    hayk: 'developer',
    anna: 'super',
    armen: 'developer'
};

const res1 = Object.entries(person).filter( el => el[1] === 'developer');

const res2 = Object.entries(person).filter( ([,value]) => value==='developer');

const res3 = Object.entries(person).filter(([,value]) => value==='developer')
    .map( ([key]) => key );

console.log(res3);  // ['hayk', 'armen']
