var mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());


//     #User Defined Date#
let myCreatedDate = new Date(2024,0,1)   //In javaScript Months strat from " 0 ".
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024,1,1,18,30) //added time with date in 24 hour format
console.log(myCreatedDate2.toLocaleString()); // have to use tolocalestring function for time

//TIMEstamp (this i used to comapre two dates and time , genrally used in booking hotel project)
let myTimeStamp = Date.now()
console.log(myTimeStamp); 

console.log(myCreatedDate.getTime()); //now you can compare the two values.

let customdate = new Date()   //some usefull inbuilt functions for date and time.
console.log(customdate.getDay());
console.log(customdate.getFullYear());
console.log(customdate.getHours());
console.log(customdate.getMonth()+1);





