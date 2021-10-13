"use strict";
// Function
let greet;
greet = () => {
    console.log('Congratulation');
};
let sayHello = () => {
    console.log('Hello, world');
};
const add = (a, b, c, d = 10) => {
    let res = a + b + c + d;
    console.log(d);
    console.log(res);
};
const minus = (a, b) => {
    return a - b;
};
add(4, 5, 6, 20);
let result = minus(10, 5);
