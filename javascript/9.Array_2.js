//Array tut part 2

const marvel_hero = ["Ironman","Thor","CaptainAmerica"]  // const- no ressignment but we can add remove and manipulate
const dc_hero =["Batman","Superman","Flash"]

// marvel_hero.push(dc_hero)  //inserts "array" in existing array(whole array considering it as single element)
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]); //to return  specefic array element within array

const newarray = marvel_hero.concat(dc_hero) //this  concatenates the two array like it should be but has to be stored in third array
console.log(newarray);

let unordered_array = [1,2,3,4,[5,6,7,[8,9]]] //array within array
let ordered_array = unordered_array.flat(2)  /* flat- returns the array to simplified manner
 to the given depth , in this case it is 2 but you can simply take "infinty" */
console.log(ordered_array);



