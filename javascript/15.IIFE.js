//for avoiding global scope variable polution in function we ise IIFE

// function a()
// {
//     console.log(`hello`);
    
// }
// a()            //normal function defination with call

(function a()                      //named IFFE
{
    console.log(`hello`);
    
})();  //IIFE     to run next function you must never forget semicolon ";"

//we can also use arrow function

( () =>                              //un-named IIFE
{
    console.log(`hello2`);
    
})(); //to run next function you must never forget semicolon ";"

//IIFE with parameters
((name) =>                             //un-named IIFE
{
    console.log(`hello 3 ${name}`);  
    
})("abhinav")