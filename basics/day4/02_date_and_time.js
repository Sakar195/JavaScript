// Dates

let myDate = new Date();
// console.log("ToString: ",myDate.toString()); // Sat Jul 20 2024 18:16:00 GMT+0545 (Nepal Time)
// console.log("ToDateString: ",myDate.toDateString());  // Sat Jul 20 2024
// console.log("ToISOString: ",myDate.toISOString());  // 2024-07-20T12:33:21.877Z
// console.log("ToLocaleString: ",myDate.toLocaleString()); // 7/20/2024, 6:21:19 PM
// console.log("ToLocaleDateString: ",myDate.toLocaleDateString()); // 7/20/2024
// console.log("ToLocaleTimeString: ",myDate.toLocaleTimeString()); // 6:18:21 PM
// console.log("ToUTCString: ",myDate.toUTCString());  // Sat, 20 Jul 2024 12:33:21 GMT

//console.log(typeof myDate); // object

let myCreatedDate = new Date (2023, 0, 23)   // months start from 0 because of zero based index
//console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM

let anotherDate = new Date (2023, 0, 23,5,2) 
//console.log(anotherDate.toLocaleString()); // 1/23/2023, 5:02:00 AM

let yetAnotherDate = new Date ("2023-01-14"); // month starts from 1
//console.log(yetAnotherDate.toLocaleString()); //1/14/2023, 5:45:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 

// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/ 1000)); // 1721480089

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1); // months start from 0
console.log(newDate.getDate());

// string interpolation
console.log(`${newDate.getDay()} is the day`) 

console.log(newDate.toLocaleString('default', {
    weekday: 'long', 
    timeZone: 'UTC', 
    month: 'long', 
    
}))


