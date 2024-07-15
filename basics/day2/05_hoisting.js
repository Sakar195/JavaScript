// Hoisting example

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5


// Example of function hoisting
hoistedFunction(); // Output: This function is hoisted

function hoistedFunction() {
    console.log('This function is hoisted');
}