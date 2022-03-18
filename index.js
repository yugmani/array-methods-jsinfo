// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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
console.log(missing);   //["one", "two", "three", "four"]

// Remove rest of the elements starting index 1;
const negativeDelete = missing.splice(1);
console.log(negativeDelete);  //["two", "three", "four"]
console.log(missing); //["one"]