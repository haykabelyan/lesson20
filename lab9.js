

const obj1 = {x:10};
const obj2 = obj1;
const obj3 = {x: 10};

console.log(obj1 == obj2);  // true
console.log(obj1 == obj3);  // false

obj2.x = 20;
console.log(obj1.x);    // 20
