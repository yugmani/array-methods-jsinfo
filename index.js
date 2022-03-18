// Import stylesheets
import './style.css';

// ARRAY METHODS

//1. ADD/REMOVE items

const myColors = ['red', 'blue', 'green'];

//arr.pop()
//extracts an item from the end.
myColors.pop();
console.log(myColors.length); //2

//arr.push(...items)
//Adds items to the end.
myColors.push('yellow');
console.log(myColors); //["red", "blue", "yellow"]

//arr.shift()
// extracts an item from the beginning,
let firstColor = myColors.shift();
console.log(firstColor); //red
console.log(myColors); //["blue", "yellow"]

//arr.unshift(...items);
// adds items to the beginning.
myColors.unshift('brown');
console.log(myColors); // ["brown", "blue", "yellow"]

//adding multiple items at the end of array
myColors.push('orange', 'gray');
console.log(myColors); //["brown", "blue", "yellow", "orange", "gray"]

//adding multiple items at the beginning of array
myColors.unshift('black', 'white');
console.log(myColors); // ["black", "white", "brown", "blue", "yellow", "orange", "gray"]

myColors.push(...myColors);
console.log(myColors); //["black", "white", "brown", "blue", "yellow", "orange", "gray", "black", "white", "brown", "blue", "yellow", "orange", "gray"]

//2. Delete an element from the array

// using 'delete' key to remove item from an array
const myNumbers = [3, 0, 4, 2];
delete myNumbers[1];
console.log(myNumbers.length); //4 ?why
console.log(myNumbers); //[3, undefined, 4, 2]  // ? undefined
// delete obj.key removes a value by the key. It’s all it does. Fine for objects.
// But for arrays we usually want the rest of elements to shift and occupy the freed place.

// arr.splice METHODS
// *****************************

// syntax: arr.splice(start[, deleteCount, elem1, ..., elemN])
// it modifies 'arr' starting from the index 'start',
// removes 'deleteCount' elements and
// then inserts elem1, ..., ...elemN
// Returns the array of removed elements

const myCourses = ['HTML', 'CSS', 'Javascript', 'jQuery'];

//to remove one element starting from index 1;
let oneRemoved = myCourses.splice(1, 1); //
console.log(oneRemoved); //["CSS"]
console.log(myCourses); // ["HTML", "Javascript", "jQuery"]

// remove some elements and replace by other elements
const numbers = [5, 0, 3, 7, 4];
let removeAndAdd = numbers.splice(1, 2, 'zero', 'three');
console.log(removeAndAdd); //[0, 3]
console.log(numbers); //[5, "zero", "three", 7, 4]

// inserting some elements without removing any
// For that we need to set deleteCount to 0

const missing = ['one', 'two', 'five', 'six'];
const noRemove = missing.splice(2, 0, 'three', 'four');
console.log(noRemove); // [];
console.log(missing); //["one", "two", "three", "four", "five", "six"]

// Negative indexes allowed
// negative indexes specify the position from the end of the array.
// -1 one step from the end
const negativeRemove = missing.splice(-2, 2); //remove 2 elements from last
console.log(negativeRemove); // ["five", "six"]
console.log(missing); //["one", "two", "three", "four"]

// Remove rest of the elements starting index 1;
const negativeDelete = missing.splice(1);
console.log(negativeDelete); //["two", "three", "four"]
console.log(missing); //["one"]

// ARRAY.SLICE() METHOD
// ******************************************

// Syntax: arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end)
// Both start and end can be negative, in that case position from array end is assumed.
// It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
//We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

const vowels = ['a', 'e', 'i', 'o', 'u'];

const simpleSlice = vowels.slice(1, 3);
console.log(simpleSlice); // ["e", "i"] --> start at index 1 upto index 3(exclusive).
console.log(vowels); // ["a", "e", "i", "o", "u"] -->original one is not mutated

const negativeSlice = vowels.slice(-2);
console.log(negativeSlice); //["o", "u"] -->last two elements

const extraSlice = vowels.slice(-3, -1);
console.log(extraSlice); //["i", "o"]; -->last index not included

console.log(vowels.slice()); //["a", "e", "i", "o", "u"] -->not sliced;

console.log(vowels.slice(2)); //["i", "o", "u"] -->all the rest starting at index 2;

console.log(vowels.slice(0, 2)); //["a", "e"]

console.log(vowels.slice(0, 0)); //[]

// ARRAY.CONCAT() METHODS
// **********************************

// creates a new array that includes values from other arrays and additional items.
// It accepts any number of arguments – either arrays or values.
// Syntax: arr.concat(arg1, arg2...)
// The result is a new array containing items from arr, then arg1, arg2 etc.

const array1 = [1, 2];
const array2 = [3, 4];
const concatOf12 = array1.concat(array2);
console.log(concatOf12); //[1, 2, 3, 4]

console.log(array1.concat('one', 'two')); // [1, 2, "one", "two"]

console.log(array2.concat([5, 6])); // [3, 4, 5, 6]

console.log(array2.concat([11, 12], [33, 44])); // [3, 4, 11, 12, 33, 44]

// Dealing with objects even arraylike objects.
const arrayLike = {
  0: 'zero',
};

console.log(array1.concat(arrayLike)); //[1, 2, Object]

// ITERATE: forEach
// **********************************

//The arr.forEach method allows to run a function for every element of the array.
// syntax:
`
arr.forEach(function(item, index, array) {
  // ... do something with item
});
`

const foods = ["pizza", "chicken nuggets", "milk shake", "pasta"]

// foods.forEach(alert);
foods.forEach(index=>console.log(index));

foods.forEach(item=>console.log(item));

foods.forEach((item, index, array)=>console.log(`The index of ${item} is ${index} in the array ${array}`));

