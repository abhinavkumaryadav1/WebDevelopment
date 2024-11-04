console.log(null>=0); //comparision operator works diffrently than equality check operator hence converting null to "0".
console.log(null<=0); //same as above
console.log(null>0);  // all three below throws false
console.log(null==0);
console.log(null<0);




console.log("2"=== 2);  //strict check :- checks the value as well as datatype of the values then returns decesion
