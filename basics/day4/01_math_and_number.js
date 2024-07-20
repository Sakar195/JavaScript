// Numbers
const score = 400
//console.log(score); // 400

const balance = new Number(1000)
//console.log(balance); //[Number]: 1000

//console.log(balance.toString().length); // 4
//console.log(balance.toFixed(2)); // 1000.00

const otherNumber = 23.4567

//console.log(otherNumber.toPrecision(3)); // 23.5
//console.log(otherNumber.toPrecision(4)); // 23.46

const hundreds = 1000000
//console.log(hundreds.toLocaleString());  // 1,000,000
//console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000


// ++++++++++++++++ Maths ++++++++++

//console.log(Math); 

// absolute value
console.log(Math.abs(-100)); // 100  

// round the number
//console.log(Math.round(1.222)) //1

//console.log(Math.ceil(1.222)) //2
//console.log(Math.floor(1.9999)) //1

//console.log(Math.min(1, 2, 3, 4, 5)) //1
//console.log(Math.max(1, 2, 3, 4, 5)) //5


console.log(Math.random()) // 0 to 1
console.log(Math.random()*10) // 0 to 1

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20


// Math.random() * (max - min)    
// Math.random() * (max - min + 1)
// Math.random() * (max - min + 1) + min 
// Math.floor(Math.random() * (max - min + 1)) + min  

// generates integer between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 


