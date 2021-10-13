interface IsPerson {
    name: string;
    age: number;
    speak(s: string): void;
    spend(n: number): number;
}

const cast: IsPerson = {
    name: 'Jonas',
    age: 24,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount)
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('Hello ', person.name);
}

greetPerson(cast)

console.log(cast);
