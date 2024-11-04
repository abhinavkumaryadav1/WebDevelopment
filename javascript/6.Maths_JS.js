//maths

let num = 400
// console.log(num); // output:- 400

let num2 = new Number(123.8)
// console.log(num2);   // output:-  [Number: 100]         (explicitly provided datatype and will grant some functions for it)

// console.log(typeof(num2.toString())); //some usefull functions (also i have nested two function for better understanding)

// console.log(num2.toFixed(1)); //output(for num2 = 100):- 100.0 (for precesion decimal value)
// console.log(num2.toPrecision(3));  // kind of gives roundoff value(5 and above will convert to next number)

let hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US')); // for better redability (by default in some compiler it is in US standards)
// console.log(hundreds.toLocaleString('en-In')); // for indian standards

//                  *************************************MATHS*****************************************

console.log(Math);  //if you code this in browser console you will get multiple values and functions though they also work here.

console.log(Math.abs(-123));  // "Absolute" :- for positive values only
console.log(Math.round(4.5)); // round off( find diffrence between round function and toPrecesion function XeasyX)
console.log(Math.floor(4.9)); // floor value kitna bhi bada ho decimal number floor hi lunga
console.log(Math.ceil(4.2));  // cieling value kitna bhi kam badha lo humesha nenxt number me update ka dunga
console.log(Math.sqrt(36));   //square-root
console.log(Math.PI);         // value of PI
console.log(Math.min(1,2,3,4)); // min value from array
console.log(Math.max(1,2,3,4)); //max value from array


console.log(Math.random());  // this function give a random number range from 0 to 1
console.log((Math.random()*10)+1); //for value rangin from 1 to 10 (we avoided 0 by adding +1)
console.log(Math.floor((Math.random()*10)+1));


const min=1;
const max=6;
console.log(Math.floor((Math.random()*(max-min+1))+min));  // for ludo bc 

