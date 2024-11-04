//IMPORTANT CONCEPT

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this , username) /*call is must because in js's call stack the setusername function 
                                       will run but after, its data will be popped from the stack
                                       thats why we use call to kind of save it for future task.
                                       (refrence hold karke rakhega) &&& this isliye use kiya hai 
                                       kyunki global context hota hai aur ek baar refrence hold
                                       karliye but hume values return nahi hui bs refrence hold hua
                                       this lagane se value mil jayegi bhale hi function stack se pop ho jaye  */
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);