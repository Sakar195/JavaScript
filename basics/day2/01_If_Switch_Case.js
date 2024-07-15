// income and age classifier

// Declare a variable age using the var keyword and set it to the number 10
var age = 45;

// Check if the value of the age variable is greater than or equal to 65
if (age >= 65) {
    console.log("You get your income from your pension");
} 
// Check if the value of the age is less than 65 and greater than or equal to 18
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} 
// Check if the value of the age is under 18
else if (age < 18) {
    console.log("You get an allowance");
} 
// Capture any other value
else {
    console.log("The value of the age variable is not numerical");
}


// Define a new variable day, and set its value to "Sunday"
var day = "Sunday";

// Switch statement for day
switch (day) {
    case 'Monday':
        console.log("Go to the gym");
        break;
    case 'Tuesday':
        console.log("Attend team meeting");
        break;
    case 'Wednesday':
        console.log("Work from home");
        break;
    case 'Thursday':
        console.log("Visit the library");
        break;
    case 'Friday':
        console.log("Go out with friends");
        break;
    case 'Saturday':
        console.log("Do household chores");
        break;
    case 'Sunday':
        console.log("Relax and unwind");
        break;
    default:
        console.log("There is no such day");
}