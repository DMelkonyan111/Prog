"use strict";
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];
let arr3;
arr3 = ['as', 'asd', true];
//tuples
let tuple1 = ['as', false, 15];
// tuple1[1] = 15  error
// tuple1[3] = 15  error
// objects
let obj1 = {
    name: "D",
    age: 15
};
const person1 = {
    name: "A",
    age: 10,
    alive: true,
    parents: ['B', 'C']
};
const func1 = (p) => {
    return `Hello ${p === null || p === void 0 ? void 0 : p.name}`;
};
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4));
