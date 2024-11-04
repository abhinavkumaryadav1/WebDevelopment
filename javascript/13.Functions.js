//Function
//function declaration
function myfunc() {

// console.log("hello");
// console.log("i am");
// console.log("function");

}
//function call
myfunc()


function addtwonum(num1,num2) // in JS we dont have to specify the type of parameters
{  

    return num1+num2

}

const result=addtwonum(1,2)
//  console.log(result);




/*concept of rest and spread
 function AddToCart(cart1)              --> firstly lets see  wrong way
 {
     return cart1
 }

 console.log(AddToCart(2,3,4)); -->here we are facing problem while passing more than parameter allows */

//right way-->  (rest and spread) these two are usefull

function AddToCart(...cart1)  {    //sometimes people use parameter like (val1,val2,...cart1)
   return cart1
}

console.log(AddToCart(1,2,3)); // output will give the array of all parameters

// ####    object in function    ####

let obj= 
{

    name:"Abhinav",
    age:22

}

function handelobject(anyobject)
{
   console.log(`object name is ${anyobject.name} and its age is ${anyobject.age}`);
   
}
handelobject(obj)                 // first way to call a function via existing object

handelobject( {
              name:"abhinav2",    //second way is to pass self created object while passing (nameless object)
              age:23
              } )