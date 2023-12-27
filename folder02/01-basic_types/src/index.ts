// Primitive types

let x = 5

let y: string;
let z: boolean;

y = 'Hello'
// y = 123 -> error: Type 'number' is not assignable to type 'string'.

z = true
// z = 'true' -> error: ype 'string' is not assignable to type 'boolean'.

//OTHER TYPES

let a: Date; // date type
let b: string[]; // array of strings
let c: number[]; // array of numbers
let d: {id: number, name: string} // object
let f: {authoer: string, book: {title: string, year: number}} // nested object


c= [1,2,3];
// c= [1,'2',3] // Type 'string' is not assignable to type 'number'.

d = {id: 1, name: 'John'}
// d = {id: 1, name: true} // Type 'boolean' is not assignable to type 'string'.

b = ['hello']
b = 'Hello' as any; //any is different type of testing 
