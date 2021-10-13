class Invoice {
    private client: string
    public details: string
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

let cliOne = new Invoice ('Jonas', 'headphone', 20)


console.log(cliOne.client);

