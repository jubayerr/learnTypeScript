"use strict";
// Form
var form = document.querySelector('.new-item-form');
// Input
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
console.log(form.children);
form.addEventListener('submit', function (e) {
    e.preventDefault;
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
