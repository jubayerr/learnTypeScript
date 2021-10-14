// Generics

const addId = <T extends {
    name: string;
    age: number;
}>(obj: T) => {
    let id = Math.floor(Math.random() * 1000)
    return {...obj, id}
}


let user = addId({
    name: "Jonas",
    age: 24,
    country: "Bangladesh"
})

console.log(
    user.name,
    user.id
);


// interface

interface APIresponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIresponse<object> = {
    status: 200,
    type: 'good',
    data: {
        name: 'test',
        something: 300
    }
}

console.log(response1.data);
