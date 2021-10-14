"use strict";
// Generics
const addId = (obj) => {
    let id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Jonas",
    age: 24,
    country: "Bangladesh"
});
console.log(user.name, user.id);
const response1 = {
    status: 200,
    type: 'good',
    data: {
        name: 'test',
        something: 300
    }
};
console.log(response1.data);
