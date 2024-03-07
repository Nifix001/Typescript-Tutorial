import { HasFomatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFomatter {
    constructor(
    readonly client: string,
    private details: string,
    public amount: number,
    ){
    }

    format() {
        return `${this.client} owes a ${this.amount} for ${this.details}`;
    }
}
