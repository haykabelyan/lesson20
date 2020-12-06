
// Spread operator for Array
// Array darcnum e tveri hajordakanutyun

const arr = [1, 2, 3];
const m1 = Math.max(...arr);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
Math.max(4, ...arr1, ...arr2, 5);

const arr3 = [1,2,3];
const arr4 = [4,5,6];
const arr5 = [...arr3, ...arr4, 44];
console.log(arr5);