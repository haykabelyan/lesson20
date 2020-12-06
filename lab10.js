

const obj1 = {x: 10};
const obj2 = Object.assign({},obj1, {y: 20});
console.log(obj2);
obj2.x = 999;
console.log(obj1.x);    // 10


