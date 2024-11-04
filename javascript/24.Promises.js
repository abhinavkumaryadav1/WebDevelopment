const mypromise = new Promise(function(resolve,reject){ //promise creation

    setTimeout(function(){
        console.log("async task is completed")
        resolve()                                         //resolve:- to connect to then
    },1000)
})


mypromise.then(function(){                            //promise consumption
    console.log(" promise consumption");
    
})  

//another method to do the same

let mypromise2 = new Promise(function(resolve,reject){ 

    setTimeout(function(){
        console.log("async task 2 is completed")
        resolve()                                         
    },1000)
}).then(function(){                            
    console.log(" promise 2 consumption");
    
})  

//same way but with parameter in resolve()

let mypromise3 = new Promise(function(resolve,reject){ 

    setTimeout(function(){
        console.log("async task 3 is completed")
        resolve({name:"abhinav",email:"abhinavk1608@gmail.com"})                                         
    },1000)
}).then(function(user){  
    console.log("promise 3 consumption");
                              
    console.log(user);
    
    
})  

//now complete code with resolve , reject ,and finally

let mypromise4 = new Promise(function(resolve,reject){ 

    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"rishu", age: 22})  //kaam ho jaye to resolve() chalega jo .then() ke paas jayega
        } else {
            reject('error: something went wrong') //kaam nahi hoga to reject() chalega jo .catch() ke paas jayega
        }
    },1000)
}).then(function(user){                          //pehla .then()
    console.log("promise 4 consumption");
    console.log(user);
    return user.username                         //returning to 2nd .then()
    
    
})  .then(function(username){           //## Chaining --> 2nd .then() --> pehle .then() ka return 2nd .then() ka argument
    console.log(username);
    
}).catch(function(error){             //reject chalega to .catch() ke paas bhejega
    console.log(error);
    
} ) .finally(function(){
    console.log("whatever happend the promise code is now complete");
    
})


/* NOTE:-   asyncronous sikh rahe hai kuch kaam karna hai jo ki ya to hoga ya to nahi hoga yahi promise bolta hai
            agar kaam ho gya to resolve nahi hua to reject aur dono me se jo bhi ho reject ya resolve finally to 
            chlage hi chalega.   generic SYNTAX(not correct):-  promise().then().catch().finally()  */

 
// Async Await
// let mypromise5 = new Promise(function(resolve,reject){ 
    
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"moron", age: 40})  
//         } else {
//             reject('error: JS went wrong') 
//         }
//     },1000)
// })            


// async function asyncawaitconsumption () {
//     try {
//         let responce = await mypromise5
//         console.log(responce);
//     }
        
//      catch (error) {

//         console.log(error);
        
    
// }}

// asyncawaitconsumption () 

//some fetch concept for example that how it works. and we will see later how it does what is does in background.

fetch("https://api.github.com/users/abhinavkumaryadav1")
.then((responce)=>{
    return responce.json() //another method to format data into json
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})

// the above fetch is printed before rest of the code watch video 41 of chai aur code to understand it
