import { HasFormatter } from "../interfaces/hasFormatter"

// classes

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}

    // constructor(r:string, d: string, a:number){
    //     this.recipient = r
    //     this.details = d
    //     this.amount = a
    // }

    format(){
        return `${this.recipient} owed $${this.amount} for ${this.details}`
    }
}