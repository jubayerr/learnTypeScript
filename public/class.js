"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Jonas', 'One plus bullet', 16);
var invTwo = new Invoice('Martha', 'Logitech mouse', 25);
console.log(invOne.format());
console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
