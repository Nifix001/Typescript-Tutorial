import { HasFomatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFomatter {
    constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
    ){
    }

    format() {
        return `${this.recipient} is owned ${this.amount} for ${this.details}`;
    }
}
