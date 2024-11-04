let obj =
{
    nameofpersone: "abhinav",
    ageofpesone: 23,
    isloggedin: true
}


// De-Structuring of object ->for quick accesing of variables from object while there are so many variables
const {nameofpersone,ageofpesone:ge} = obj
console.log(nameofpersone);
console.log(ge); //we can also use coustom name for the variables

 