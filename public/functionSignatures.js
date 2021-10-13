"use strict";
// function signature
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne * numTwo;
    }
};
// example 3
let logDetails;
logDetails = (student) => {
    console.log(`${student.name} is ${student.age} years old.`);
};
