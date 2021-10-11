// explicit types
let characterName: string
let age: number
let isHaveRole: boolean

// age = '45' // can not do that
age = 24 // that absolutely fine

// isHaveRole = 24 // can not do that 
isHaveRole = true // that absolutely fine

// arrays

let groups: string[]

// groups = [2, 3, 4, 5] // not valid 

groups = ['science', 'commerce', 'arts'] // thats alright

// union types

let mixed: (string|number)[] = []

mixed = ['cat', 4, 'dog', 5]

let uid: string|number

uid = '123'
uid = 123

// objects

let castOne: object

castOne = {
    name: 'Mikkel',
    age: 12,
}

let castTwo: {
    name:string,
    age:number,
    hasRole: boolean
}

