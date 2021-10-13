// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // constructor(r:string, d: string, a:number){
    //     this.recipient = r
    //     this.details = d
    //     this.amount = a
    // }
    format() {
        return `${this.recipient} owed $${this.amount} for ${this.details}`;
    }
}
