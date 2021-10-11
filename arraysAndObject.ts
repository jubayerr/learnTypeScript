// declare an array
let characters = ['Jonas', 'Martha', 'Mikkel']
// push an element to array
characters.push('Bartosz')
// characters.push(10) // can not push a number to string array

console.log(characters);

// arrays of numbers
let numbers = [10, 20, 30, 40]
// push an element to array
numbers.push(50)
// numbers.push('Magnus') // can not push an string to numbers array

console.log(numbers);

let mixed = ['Apple', 5, 'Banana', 20, 'WaterMelon']
// they can be push in a mixed array
mixed.push('Mango')
mixed.push(25)
mixed[0] = 10;

// declare an object

let mainCharacter = {
    name: 'Jonas',
    role: 'Protagonist',
    isPro: true,
    age: 24,
}

mainCharacter.role = 'Antagonist'
// mainCharacter.age = "24" // can not change type of an element

console.log(mainCharacter)