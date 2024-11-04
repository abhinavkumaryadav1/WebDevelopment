const hey = ["abhi","mani","hey","adi"]

const hey2=hey.forEach((item)=>{  //storing it into a variable
    // console.log(item);
    return item //so we can see it does'nt return the value to hey2 variable
    
})

console.log(hey2) //returns undefined because "for each" does'nt return any value.

//for this we have "filter method :-

const hey3=hey.filter((item)=> {   //this is similar to "for each function just that for array it returns the values in the array format"
return item                       //or you can put " (item)=> item " into filter direct expresion
})
console.log(hey3);               //it has stored the value


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

const var3= arrayobject.map((obj)=>{
    return  obj.age>20   //map does'nt perform like filter and doesn'nt give only filter values it gives all values
} )

console.log(var3);

// NOTE: FOR BETTER UNDERSTANDING TRY THIS :- const var3= arrayobject.filter((obj)=>{return obj.age>21}

 //####    CHAINING METHOD    ####


 let mynum=[1,2,3,4,5,6,7,8,9,10]

 const num = mynum.map((index)=> index*10) .map((index)=> index+1 ).filter((index)=> index>70)
    //chaining of more than one call back function
 console.log(num);
  
 //REDUCE METHOD
// 3 cheese hai accumulator curr value aur reduce value. acc->initialy hold reduce value
 let arr2 =[1,2,3]

//  let newnum = arr2.reduce((acc,curr) =>
// {
//     return acc+curr
// },0) 
// console.log(newnum);

//THE ABOVE CODE can be written as

let newnum=arr2.reduce((acc,curr)=>acc+curr,0) 
console.log(newnum);
//study it here
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


//                                           XOXO