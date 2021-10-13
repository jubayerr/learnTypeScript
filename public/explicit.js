"use strict";
// explicit types
let characterName;
let age;
let isHaveRole;
// age = '45' // can not do that
age = 24; // that absolutely fine
// isHaveRole = 24 // can not do that 
isHaveRole = true; // that absolutely fine
// arrays
let groups;
// groups = [2, 3, 4, 5] // not valid 
groups = ['science', 'commerce', 'arts']; // thats alright
// union types
let mixed = [];
mixed = ['cat', 4, 'dog', 5];
let uid;
uid = '123';
uid = 123;
// objects
let castOne;
castOne = {
    name: 'Mikkel',
    age: 12,
};
let castTwo;
