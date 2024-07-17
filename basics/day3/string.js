let text = "Namaste From Nepal"

//returns the length of the string
console.log("Length :",text.length); 

// 1. charAt()
// returns the character at the specified index
console.log("charAt :",text.charAt(0)); 

// 2. charCodeAt()
// returns the unicode of the character at the specified index
console.log(`codeAt :${text.charCodeAt(3)}`);

let str1 = "Hello";
let str2 = "World";

// 3. concat()
// returns the concatenated string (joins the strings)
console.log("Concat: ",str1.concat(", ",str2,"!"));

let movie ="Iron Man";

// 4. includes()
//checks if a string contains a specified value.
console.log("includes: ",movie.includes("n Man")); //return true

// 5. indexOf()
// Returns the index of the first occurrence of a specified value.
console.log("Index of n :",movie.indexOf("n")); // 3

// 6. lastIndexOf()
//Returns the index of the last occurrence of a specified value.
console.log("last index of n :",movie.lastIndexOf("n")); // 7

let context = "Java Script is a programming language"

// 7. endsWith()
//checks if string ends with a specified value
console.log("Ends with :",context.endsWith("language")); // true

// 8. startsWith()
//checks if string starts with a specified value
console.log("Starts with :",context.startsWith("Java")); // true



const text1 = "The rain in Spain stays mainly in the plain";

// 9. match()
// g checks the entire string for the pattern
const result = text1.match(/ain/g);
console.log("Match :",result); //[ 'ain', 'ain', 'ain', 'ain' ]




let str = "Hello, World!";

// 10. repeat()
// Returns a new string with a specified number of copies of an existing string.
console.log(str.repeat(2)); // "Hello, World!Hello, World!"

// 11. replace()
//Searches a string for a specified value or a regular expression and returns a 
//new string with the value(s) replaced
console.log(str.replace("World", "Universe")); // "Hello, Universe!"

// 12. search()
//Searches a string for a specified value or regular expression and returns the position of the match.
console.log(str.search("World")); // 7


let statement = "This is my country"

// 13. Slice()
//Extracts a part of a string and returns a new string.
// Takes two arguments, start and end index

console.log("Slice :",statement.slice(5,20)); // is my country
console.log(statement.slice(0, 5)); // This
console.log(statement.slice(7, 12)); //  my c
console.log(statement.slice(7)); //  my country
// If negative, it is treated as str.length + startIndex
// If negative, it is treated as str.length + endIndex
console.log(statement.slice(-6, -1));  // ountr

// 14. Split()
// Splits a string into an array of substrings
// Takes a separator as an argument, can be blank space, comma ,etc
console.log(statement.split(" ")); //[ 'This', 'is', 'my', 'country' ]

// 15. substring()
// Extracts the characters from a string, between two specified indices
console.log("Substring :",statement.substring(5,20)); //is my country
console.log(statement.substring(0, 5)); // This
console.log(statement.substring(7, 12)); // my c
console.log(statement.substring(7)); // my country
console.log(statement.substring(12, 7)); // my c
console.log(statement.substring(-6, -1)); // "" (negative indices are treated as 0)


let day= "SunDay";

// 16. toLowerCase()
// Converts a string to lowercase letters
console.log("Lowercase :",day.toLowerCase()); // sunday

// 17. toUpperCase()
// Converts a string to uppercase letters
console.log("Uppercase :",day.toUpperCase()); // SUNDAY

let strWithSpaces = "   Hello, World!   ";
// 18. trim()
// Removes whitespace from both ends of a string
console.log("Trim :",strWithSpaces.trim()); // "Hello, World!"

// 19. trimStart()
// Removes whitespace from the beginning of a string
console.log("TrimStart :",strWithSpaces.trimStart()); // "Hello, World!    "

// 20. trimEnd()
// Removes whitespace from the end of a string
console.log("TrimEnd :",strWithSpaces.trimEnd()); // "   Hello, World!"


let num = 123;

// 21. toString()
// Converts a number to a string
console.log(num.toString()); // "123"

let strObj = new String("Hello World");
let str3 = "Hello World";

// 22. valueOf()
// Returns the primitive value of a string object
console.log(strObj.valueOf()); // "Hello World"

// without valueOf() => [String: 'Hello World']

// 23. localeCompare()
// Compares two strings in the current locale
console.log("localeCompare :",str3.localeCompare("Hello World")); // 0 (equal) else -1 or 1


let strPad = "This is a string";
// 24. padStart()
// Pads a string with another string until it reaches the specified length
console.log("padStart :",strPad.padStart(28, "Hello")); // "HelloHelloHeThis is a string"

// 25. padEnd()
// Pads a string with another string until it reaches the specified length
console.log("padEnd :",strPad.padEnd(20, "Hello")); // "This is a stringHell"