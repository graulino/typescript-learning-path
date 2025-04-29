// primitive-types.ts

// string
let userName: string = "Gabriel";
let language: string = 'TypeScript';

// number
let age: number = 28;
let height: number = 1.75;

// boolean
let isLearning: boolean = true;

// null
let nothingHere: null = null;

// undefined
let notAssignedYet: undefined = undefined;

// symbol
let uniqueId: symbol = Symbol("id");

console.log(`Name: ${userName}`);
console.log(`Age: ${age}`);
console.log(`Learning TypeScript? ${isLearning}`);
console.log(`Symbol: ${uniqueId.toString()}`);

// Function to check the type of a variable
// This function takes a value of any type and returns its type as a string.
function checkType(value: any): string {
    return typeof value;
}

checkType(console.log(checkType(userName)));
checkType(console.log(checkType(age)));
checkType(console.log(checkType(isLearning)));
checkType(console.log(checkType(nothingHere))); // null is an object in JS
checkType(console.log(checkType(notAssignedYet)));
checkType(console.log(checkType(uniqueId)));