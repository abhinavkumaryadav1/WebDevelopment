const myfunction = function()
{
    console.log("hello fucntion");
    
}

console.log( typeof(myfunction))

let obj1={
    email: "abhinav@google",
    id:12,
}

let obj2 = obj1 // this is non-primitive thats why here obje2 (object) is getting refrencec of obj1

obj2.email="edward@google" //updating through refrence

console.log(obj1.email);
console.log(obj2.email);


