// explicit types
var characterName;
var age;
var isHaveRole;
// age = '45' // can not do that
age = 24; // that absolutely fine
// isHaveRole = 24 // can not do that 
isHaveRole = true; // that absolutely fine
// arrays
var groups;
// groups = [2, 3, 4, 5] // not valid 
groups = ['science', 'commerce', 'arts']; // thats alright
// union types
var mixed = [];
mixed = ['cat', 4, 'dog', 5];
var uid;
uid = '123';
uid = 123;
// objects
var castOne;
castOne = {
    name: 'Mikkel',
    age: 12
};
var castTwo;
