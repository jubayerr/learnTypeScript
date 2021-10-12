class Invoice {
    client: string
    details: string
    amount: number

    constructor(c:string, d: string, a:number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}


const invOne = new Invoice('Jonas', 'One plus bullet', 16)
const invTwo = new Invoice('Martha', 'Logitech mouse', 25)

console.log(invOne.format());
console.log(invTwo.format());

let invoices: Invoice[] = []

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);
