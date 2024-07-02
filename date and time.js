/// Dates

let myDates = new Date()
// console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(typeof(myDates.toDateString()));
// console.log(myDates.toLocaleString());
// console.log(typeof myDates)

// let myCreatedDate = new Date(2023 , 0 ,23)
// let myCreatedDate1 =new Date(2023,0,23,5,3)
// console.log(myCreatedDate1.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDates.getTime())  // It gives all seconds into sec(millli)
console.log(Math.floor(Date.now()/1000));  //It converts milliseconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); 

const now=newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'Asia/Kolkata'    
});

console.log(now)
console.log(now.weekday)
console.log(now.timeZone)