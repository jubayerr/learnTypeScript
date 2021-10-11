"use strict";
// function signature
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne * numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (student) {
    console.log(student.name + " is " + student.age + " years old.");
};
