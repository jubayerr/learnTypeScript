import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// Form
const form = document.querySelector('.new-item-form');
// Input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(form.children);
form.addEventListener('submit', (e) => {
    e.preventDefault;
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
    console.log(doc);
});
