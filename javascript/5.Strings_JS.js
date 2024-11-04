let a = "abhinav"
let b = " yadav"

console.log(a+ b); //simpler way 

/* STRING INTERPOLATION TECHNIQUE*/

console.log(`hello ${a} ${b} this is interpolation`);

//this can be used in cases when we need to use some methods with strings like "touppercase" etc.

let name = new String("abhinavk")    /* this will generate kind of character array with its size and
 multiple methods to start with but it is not array it is object holding key value pair at name[0]:a */

console.log(name);
console.log(name[2]);
console.log(name.length);                    //some usefull methods
console.log(name.toUpperCase());
console.log(name.charAt(4));
console.log(name.indexOf('k'));

let newname= name.substring(0,5) //it will store only till 4th index
console.log(newname);  

let newname2= name.slice(-7,5)  //negative de sakte hai piche se shuru karega circular count kar sakta hai
console.log(newname2);

let trimtry = "      trim_function_trial    "
console.log(trimtry);
console.log(trimtry.trim()); // this function will remove all the useless spaces from the string

let url= "https//www.abhinavkumaryadav/abhinav 20.com"
console.log(url.replace(' ',"%20%")); /* this method finds your desires value even spaces and will replace it with
                                        whatever is given in parameter */


//study more about string methods from mdn refrence




