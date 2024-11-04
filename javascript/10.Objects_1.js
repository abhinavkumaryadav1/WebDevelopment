// Object.create  ---> Singleton concept (object creation through consrtuctor)

const mysymbol = Symbol("key1") //declared a Symbol for some understanding ahead , direct go to objeect

//Through Object Literals method (key value pair)

const obj = 
{

  name: "abhinav",
  "full name" : "abhinav kumar yadav",
  email: "abhinavk1608@gmail.com",
  age:22,
  department: "Information Technology",
  [mysymbol] : "value1"

}

//two ways to access object members
console.log(obj["name"]);  //object member  should be in double quotes 
console.log(obj["age"]);   //This way is correct way as we can't acces some data member with dot operator
console.log(obj.email);    //bad practice
// console.log(obj.full name); // wou'nt work
console.log(obj["full name"]); // this is why we use this way

console.log(obj[mysymbol]);  // this is how to access symbol from object and its type will be symbol though typeof dont' work

obj.age=23         //this is how we can alter object
console.log(obj);  
// Object.freeze(obj) //this is how we can freez/unchangable an object
obj.age=12         // wou'nt work cuz its freez
console.log(obj);  //freez cheack

// ***************** Functions in Objects ******************
//commented freez to implement functions 

obj.myfunction = function() {
  console.log("hello i am a object function");  
}

obj.myfunction2 = function()
{
  console.log(`hello ${this.name}, this is function with refrence to object variables`);
  
}

console.log(obj.myfunction());
console.log(obj.myfunction2());







