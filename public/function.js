"use strict";
// Function
var greet;
greet = function () {
    console.log('Congratulation');
};
var sayHello = function () {
    console.log('Hello, world');
};
var add = function (a, b, c, d) {
    if (d === void 0) { d = 10; }
    var res = a + b + c + d;
    console.log(d);
    console.log(res);
};
var minus = function (a, b) {
    return a - b;
};
add(4, 5, 6, 20);
var result = minus(10, 5);
