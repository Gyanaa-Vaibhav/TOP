console.log("comments");
// Javascript start with "//" these are single line comments
/*
This is used for Multi-line comments.
*/

console.log("Data Types");
/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

console.log("String");
// String -- it is a piece of text they are immutable/unchangeable

console.log("number");
// Number -- numbers float and normal 

console.log("Undefined");
// Undefined -- Something that has not been defined for example using a var with no value;

let a; // Undefined Example
console.log(a);

console.log("Null");
// Null -- Setting something to be nothing

let b = null; // Null Example
console.log(b);

console.log("Boolean");
// Boolean -- true or false value

console.log("Symbol");
// Symbol -- Primitive data type

console.log("Object");
// Object -- Key Value-Pair

console.log("Variables");
// Variables -- A box to store any of the data types mentioned above

var name = "Gyanaa"; // setting the name value
name = "changed" // changing it 
// var has a global scope and is out dated and can no longer be used and is mutable/changeable


let last_name = "Vaibhav"
last_name = "changed again"

// above is the let key word again used to set a variable same as var but is local to a scope and still mutable

const age = 19;
// const a variable but cannot be changed suitable to be used to set to unchangeable values

/*
let a = 5;
let b = 5;

Addition = a + b; // 10
Subtraction = a-b; // 0
Multiply = a*b; // 25
Divide = a/b; //1


*/

a = 5;
a++; // = 6
a--; // 5

a *= 5 //25
a/=5 //1

//String Concatenation 
let string1 = "This is one.";
let string2 = " This is two";
console.log(string1 + string2);

// Finding the length of the string
console.log(string1.length);

// Finding the item at nth value
console.log(string1[0]);


// Arrays - just like variable but you can store multiple piece of data
let Array = ["name", 2, "another_Name", 4];

// Nested Array - Array inside of Array
let nestedArray = [["name", 2], ["anotherName", 4]];

// Accessing Elements same as String
console.log("\n" + Array[0]);
console.log("\n" + nestedArray[0][0]);
console.log("\n" + nestedArray[0][1]);


// Arrays can be modified;

Array[0] = "changedName"

console.log(Array);


// Push -- Used to add element to the end of the Array
Array.push("newName")
console.log(Array);

// Pop -- Used to remove last element form array
Array.pop();
Array.pop();
console.log(Array);

// Shift -- Same as pop but removes first element
Array.shift();
console.log();
console.log(Array);

// unshift -- Adds elements to the first of the array
Array.unshift("unshifting");
console.log(Array);

// Functions -- Writing reusable code
function newFunction() {
    console.log("Testing the function");
}

newFunction();

// Function Parameters -- Values to be added in function
function add(a, b) { // (a,b) can be anything like (num1,num2)
    console.log(a+b);   
}

add(1,2)

// Scope -- it means the visibility of the variables variables which are in {} cannot be used outside {}

// this is global variable
let globalvar = "I'm form the outside"
console.log(globalvar);

function fun() {
    // This has a local scope
    let insideFunction = "Hello Wrold! "
    console.log(insideFunction + globalvar);

    // if no keyword is used while declaring the function it is global
    forTheFunction = "I'm from inside"
}

fun();
console.log(forTheFunction);


// throws a error cause outside of {}
// console.log(insideFunction);


