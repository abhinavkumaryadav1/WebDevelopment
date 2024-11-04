// singleton method
//declaration of singleton object

const mysingletonobj = new Object()
console.log(mysingletonobj);

//to insert object variables

mysingletonobj.name ="abhinav"
mysingletonobj.age=22
mysingletonobj.isloggedin= true

console.log(mysingletonobj);

//we can also nest objects inside an object

const hey ={
    name: "abhinav",

    hey2:{
      name2: "kumar",

      hey3: {
        name3:"yadav"
      }
    }
}

//access object inside another  object we can use like this
console.log(hey);
console.log(hey.hey2);
console.log(hey.hey2.hey3);



//combining two or more object into one

const a ={1:"a",2:"b"}
const b ={3:"a",4:"b"}
const c ={5:"a",6:"b"}

/* const d = Object.assign(a,b,c)  ---> (bad practice) you must use {} before all objects otherwise "a" will be merged with all objects and
will act as sourse  (sytax-->  (source,any,any,any))  */
const d = Object.assign({},a,b,c)
console.log(d);
console.log(a);
// const d = {...a,...b,...c}   ----> this is another and latest way to do the same glass uthao aur girado spread.
//console.log(Object.isFrozen(hey));  ---> check if object is frozen

//           ####    array object    ####
const arr = [
  {
    name:"Abhinav",
    age:22
  } ,

  {
    name: "ajay",
    age:22
  },

  {
    name:"gagan",
    age:23
  },

  {
    name:"achintya",
    age:21
  }
]
//manner of accesing object in array
console.log(arr);
console.log(arr[0]);
console.log(arr[0].age);
// few usefull methods
console.log(Object.keys(a));
console.log(Object.values(a))
console.log(Object.entries(a))
console.log(a.hasOwnProperty(1));
