// variables

/*
camelCase (recommended with javascript)
snake_case
TitleCase
*/

//avoid using var
var firstName = "Erik"
//your first choice when creating (declaring) a variable should be const
const lastName = "Montes"

//3rd alt
let isHappy = true;

console.log (firstName);
console.log (lastName);
console.log (isHappy);

//emptystring

const duckName = ""; //example of empty string

let city; //let city = undefined


//variables that cant be named after reserve
//

// const class = hello

console.log(typeof 7); //number
console.log(typeof 4.7); //number
console.log(typeof NaN); //number
console.log(typeof ""); //string
console.log(typeof "john"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //null (Bug) object

console.log(firstName); //string
console.log(lastName); //string
console.log(isHappy); //boolean 
console.log(typeof duckName); //string

//declaration and assignment
let hobby = "soccer";
//re-assignment
hobby = "555";

console.log(hobby)
//delcaration and assignment (permanent)
const favoriteFood = "pizza";
//doesnt work but you may not need to reassign
favoriteFood = "tacos";

//operators
const luckyNumber = 34;

console.log(5 * 6);
console.log(110 + 2);

// + overloadingfor strings
console.log("Favorite" + "Pizza")