//HIGHER ORDER LOOPS 
//FOR OF LOOP , FOR IN LOOP , FOR EACH function


const arr=[1,2,3,4,5]
for(let i of arr) {   //i is iterator here it directly increments the value. no need to increment or give condition in higher order loop
  
    // console.log(i);
    
}




const tempstring="abhinav"  // another example of "for of" loop with strings with continue statement
for (const temp of tempstring) {
 if (temp=="b") {
    continue
 }
 else{ 
    // console.log(temp);
    
 }
    
}



//introduction to maps in JS

let map = new Map()
map.set(1,"india")
map.set(2,"america")
map.set(3,"china")
map.set(4,"russia")
map.set(5,"europe")
map.set(1,"india") //it is not in output:- see it stores unique key value pair in maps

// console.log(map);

//using "for of " for maps

/* for (const key of map){
console.log(key)  }        --> this is giving each key:value pair in array so we have to destructure
                            array to get desired output */

//after destructuring the array:-
for (const [key,value] of map) {
//  console.log(key,value)
 }
 
//FOR IN LOOP
//in object we cannot itereate through "for of" loop thats why we use "for in" loop
 let obj = 
 {
   "ab":"abhinav",
   "ma":"manish",
   "aj":"ajay"


 }

 for (const objkey in obj) {
    // console.log(objkey,obj[objkey]);  //obj[objkey] ka matlab object ke key position ki "value"
    
 }


//## for each fucntion (call back function)

let arr2 =[1,2,3,4,5]

arr.forEach(function(val){   /* "for each" is a call back function which performs a specefic task
 console.log(val);           for the iterative value , just like simple function performing a task*/  
    
})

//with arrow function (just for clarity)
arr.forEach((val)=>{
    // console.log(val);
    
})

//another example for more clarity

arr.forEach(function(val){
    let a = val+1
    // console.log(a);    //see how you can use functions on iterators
    
})

//for each on arraay objects important
let arrayobject =  [ {
    name:"abhinav",
    age:22
},
 {
    name:"manish",
    age:25
},
{
    name:"harsh",
    age:19
}]

arrayobject.forEach((obj)=>{
    console.log(obj.name);
    console.log(obj.age);
})



