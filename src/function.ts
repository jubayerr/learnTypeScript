// Function

let greet: Function

greet = () => {
    console.log('Congratulation');
}

let sayHello = () => {
    console.log('Hello, world')
}

const add = (a:number, b:number, c?: number | string, d: number = 10): void => {
    let res = a + b + c + d
    console.log(d);
    
    console.log(res);
}

const minus = (a: number, b: number): number => {
    return a -b
}

add(4, 5, 6, 20)

let result = minus(10,5)