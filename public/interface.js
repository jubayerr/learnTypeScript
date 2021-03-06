"use strict";
const cast = {
    name: 'Jonas',
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(cast);
console.log(cast);
