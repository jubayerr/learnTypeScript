"use strict";
// Form
const form = document.querySelector('.new-item-form');
// Input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
console.log(form.children);
form.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
