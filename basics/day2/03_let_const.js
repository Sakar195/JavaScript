// Using let to declare a block-scoped variable

let message = "Hello, World!";
console.log(message); // Output: Hello, World!

// Block scope example
{
    let message = "Hello, Block!";
    console.log(message); // Output: Hello, Block!
}

console.log(message); // Output: Hello, World!

// Using const to declare a constant variable
const PI = 3.14159;
console.log(PI); // Output: 3.14159
// Attempting to reassign a const variable will throw an error
try {
    PI = 3.14;
} catch (error) {
    // Output: Assignment to constant variable.
    console.error("Error:", error.message); 
}