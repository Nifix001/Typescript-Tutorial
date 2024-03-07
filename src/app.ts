import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFomatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFomatter;
// let docTwo: HasFomatter;

// docOne = new Invoice("Ayo", 'web work', 250);
// docTwo = new Payment ('Tolu', 'plumbing', 200);

// let docs: HasFomatter[]= [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// const invOne = new Invoice('Ayo','worth of properties', 20);
// const invTwo = new Invoice('Tolu','worth of properties', 3);
// let invoices: Invoice[]= [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.client,inv.amount, inv.format());
// });


const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// lit template instance
const ul= document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc: HasFomatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
    
})


// // GENERICS
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let doc = addUID({name: 'Tolu', age: 29});

// console.log(doc.age);

// // ENUM
// enum ResourceType {
//     BOOK, AUTHOR, FILM, DIRECTION, PERSON
// }

// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }

// const exp: Resource<string[]> = {
//     uid: 1,
//     resourceType: ResourceType.DIRECTION,
//     data: ['Muto', 'Fashi']
// }

// console.log(exp);
 
// Tuples

