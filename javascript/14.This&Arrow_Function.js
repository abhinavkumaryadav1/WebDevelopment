const object1 =
{
    name:"Abhinav",
    age:22,
    isloggedin:true,

    messageuser: function()
    {
        console.log(`${this.name}, welcome to this tutorial`);
        
    }
}

// object1.messageuser()
object1.name="shashi"
// object1.messageuser()

// console.log(this); //returns empty object (in browser this returns global object(browser engin))

             /****************************************************************************/

 function Chai()
 {
    console.log(this);  // while printing is node enviornment it returns global object
    
 }           
//  Chai()


//Arrow Function
//synatx () => {}

let plusone= (num) => 
{
    return num+1                //this is crux of arrow function
}    
console.log(plusone(1))

//another approch for arrow function
/*
let a = () => {return 3}
let a = () => 3                   // you can use any syantx(if you use "{}" then return is must and in "()" its not
let a = () => (3)
let a = () => ({name:"Abhinav"})  // for object paranthesis is must "()"
 console.log(a()); */
   