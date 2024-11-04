//ARRAY

//array declaration syntax
let  arr = [1,1,2,2,3,3,4,4,4,5,6]
console.log(arr);
//another way to declare arrays
let arr2 = new Array(1,2,3,4)
console.log(arr2);

//        @@@@@@@ METHODS @@@@@@

let arr3 =[1,2,3,4]
console.log(arr3);
arr3.push(5)
arr3.push(6)
arr3.push(7)
arr3.pop()
console.log(arr3);

arr3.unshift(10)  // it simply insert the value at the start of the array and shift every element which is again complex
arr3.unshift(11)
console.log(arr3);

arr3.shift()      // opposite of unshift , it pops the front value
console.log(arr3);

console.log(arr3.includes(5));  //checks if given value is present in array or not
console.log(arr3.includes(14));

console.log(arr3.indexOf(4));  //returns the index of the given element

// #### Slice & Splice ####

let arr4 = [1,2,3,4,5]
console.log(arr4);

console.log(arr4.slice(1,3));  // just returns element of the (0 to range-1) without manipulating the array
console.log(arr4);
console.log(arr4.splice(1,3)); // returns element of whole range but also manipulates the orignal array(deletes the range elements)
console.log(arr4);










