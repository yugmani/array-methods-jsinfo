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
`;

const foods = ['pizza', 'chicken nuggets', 'milk shake', 'pasta'];

// foods.forEach(alert);
foods.forEach((index) => console.log(index));

foods.forEach((item) => console.log(item));

foods.forEach((item, index, array) =>
  console.log(`The index of ${item} is ${index} in the array ${array}`)
);

// Searching in array
// ********************************

// indexOf/lastIndexOf and includes
// --------------------------------------

let searchArray = [2, 0, 11, true, false, 11, 'hello'];

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.

let index = searchArray.indexOf(11, 0);
console.log('Index: ' + index); //2;

index = searchArray.indexOf(100, 0);
console.log(index); //-1;

index = searchArray.indexOf(2, 1);
console.log(index); //-1;

index = searchArray.indexOf(true, 0);
console.log(index); //3;

// arr.lastIndexOf(item, from) – same, but looks for from right to left.
let lastIndex = searchArray.lastIndexOf(11, searchArray.length);
console.log(lastIndex); //5

// arr.includes(item, from) – looks for item starting from index from, returns true if found.
// If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.
// Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf

let included = searchArray.includes('hello', 0);
console.log(included); //true;

included = searchArray.includes(2, 3);
console.log(included); //false;

included = searchArray.includes(111, 0);
console.log(included); //false;

let nanArray = [NaN, null, undefined, true, false, 0, 1];
console.log(nanArray.indexOf(NaN)); // -1 ?? Note that the methods use === comparison. So, if we look for false, it finds exactly false and not the zero.

console.log(nanArray.includes(NaN)); //true

console.log(nanArray.indexOf(null)); //1
console.log(nanArray.includes(null)); //true

console.log(nanArray.indexOf(undefined)); //2
console.log(nanArray.includes(undefined)); //true

console.log(nanArray.indexOf(false)); //4
console.log(nanArray.includes(undefined)); //true

console.log(nanArray.indexOf(0)); //5
console.log(nanArray.includes(0)); //true

console.log(nanArray.indexOf(1)); //6
console.log(nanArray.includes(1)); //true

console.log(nanArray.indexOf('true')); //-1
console.log(nanArray.includes('true')); //false

// find and findIndex
// *******************************

// arr.find(fn) method comes in handy if we want to find an object with the specific condition in an array of objects.

// syntax:
`
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
`;
// The function is called for elements of the array, one after another:

// 'item' is the element.
// 'index' is its index.
// 'array' is the array itself.

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

let myUser = users.find((item) => item.id === 2);
console.log(myUser); //{id: 2, name: "Pete"}

let newUser = users.find((user) => user.name === 'Mary');
console.log(newUser); //{id: 3, name: "Mary"}

// The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.

let oddUser = users.findIndex((user) => user.name === 'John');
console.log(oddUser); //0 -->zero index;

let noUser = users.findIndex((user) => user.id === 101);
console.log(noUser); //-1 -->the user with id '101' is not found.

// arr.filter()
// *******************************

// The find method looks for a single (first) element that makes the function return true.

// The syntax is similar to find, but filter returns an array of all matching elements:

// syntax:
`
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
`;

let students = [
  { id: 1, name: 'biden', age: 23 },
  { id: 2, name: 'shelly', age: 17 },
  { id: 3, name: 'jed', age: 19 },
  { id: 4, name: 'milan', age: 12 },
  { id: 5, name: 'von', age: 35 },
];

let top3 = students.filter((student) => student.id < 4);
console.log(top3); // [ {id:1, name:"biden", age: 23 },  {id:2, name:"shelly", age: 17},  {id:3, name:"jed", age: 19 }]
console.log(top3.length); //3

let young = students.filter((student) => student.age < 18);
console.log(young); // [ {id:2, name:"shelly", age: 17},  {id:4, name:"milan", age:12 }]
console.log(young.length); //2

//TRANSFORM an array
// --------------------------------------

// arr.map()
// **************************************

// It calls the function for each element of the array and returns the array of results.

// syntax:
`
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
`;
let mountains = ['Sagarmatha', 'Annapurna', 'Dhawalagiri', 'manasalu'];

let wordLength = mountains.map((mount) => mount.length);
console.log(wordLength); //[10, 9, 11, 8]

let upperMounts = mountains.map((mount) => mount.toUpperCase());
console.log(upperMounts); // ["SAGARMATHA", "ANNAPURNA", "DHAWALAGIRI", "MANASALU"]

let series = [1, 2, 3, 4, 5];
let doubleSeries = series.map((num) => num * 2);
console.log(doubleSeries); //[2, 4, 6, 8, 10]

// arr.sort()
// ********************************

// The call to arr.sort() sorts the array in place, changing its element order.
// It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

const letters = ['c', 'x', 'a', 'm'];
const sortedLetters = letters.sort();
console.log(sortedLetters); //["a", "c", "m", "x"]

const age = [12, 9, 11, 7];
console.log(age.sort()); // [11, 12, 7, 9]
// Did you notice anything strange in the outcome?
// Order is changed but incorrect. Why?

// -----------------------------------------------
// THE ITEMS ARE SORTED AS STRINGS BY DEFAULT
// -----------------------------------------------

//Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "7" > "12".

// To use our own sorting order, we need to supply a function as the argument of arr.sort().

// The function should compare two arbitrary values and return:

function compare(x, y) {
  if (x > y) return 1;
  else if (x == y) return 0;
  else return -1;
}

// Let's sort array as numbers:
let sortedAge = age.sort(compare);
console.log(sortedAge); //[7, 9, 11, 12]
// Now it works as intended;

//The arr can be array of anything, right? It may contain numbers or strings or objects or whatever.

// How about this function with letters?
console.log(letters.sort(compare)); //["a", "c", "m", "x"]

// To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

//  It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.

const allNumbers = [1, -2, 15, 2, 0, 8];
const sortedAll = allNumbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedAll); //[-2, 0, 1, 2, 8, 15]

// Neat and short sorting
// arr.sort((a, b)=> a - b);

console.log([6, 11, -3, 1, 1 / 5, 0].sort((a, b) => a - b));
// [-3, 0, 0.2, 1, 6, 11]

// Use localeCompare for strings
// Strings comparison algorithm compares letters by their codes by default.

//For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.

// For example, let’s sort a few countries in German:
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a - b));
// ["Österreich", "Andorra", "Vietnam"] -> not intended result?

console.log(countries.sort((a, b) => (a > b ? 1 : -1)));
// ["Andorra", "Vietnam", "Österreich"] -> still not intended result?

console.log(countries.sort((a, b) => a.localeCompare(b)));
// ["Andorra", "Österreich", "Vietnam"] -> Now it is as intended

// arr.reverse();
// ********************************************

// The method arr.reverse reverses the order of elements in arr.
// It also returns the array arr after the reversal.
const num1 = [1, 2, 3, 4, 5];
console.log(num1.reverse()); //[5, 4, 3, 2, 1]

const laptops = ['Logitech', 'Dell', 'Asus', 'HP', 'Toshiba'];
console.log(laptops.reverse()); // ["Toshiba", "HP", "Asus", "Dell", "Logitech"]

// arr.split() and arr.join()
// ********************************************

// The str.split(delim) method splits the string into an array by the given delimiter delim.

// split into letters
let lap = 'logitech';
let splitLap = lap.split('');
console.log(splitLap); //["l", "o", "g", "i", "t", "e", "c", "h"]

// split into commas
let laptopWindows = 'Logitech, Dell, Asus, HP, Toshiba';
let splitLaptops = laptopWindows.split(',');
console.log(splitLaptops); // ["Logitech", " Dell", " Asus", " HP", " Toshiba"]

// split into symbols
const tags = '#code#web#developer#javascript#design';
console.log(tags.split('#')); // ["", "code", "web", "developer", "javascript", "design"]

// The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let splitIgnored = laptopWindows.split(', ', 3);
console.log(splitIgnored); //["Logitech", "Dell", "Asus"]

// arr.join(glue)
// ****************************************

//The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
const lapArray = ['Logitech', 'Dell', 'Asus', 'HP', 'Toshiba'];
const laptopJoins = lapArray.join();
console.log(laptopJoins); //Logitech,Dell,Asus,HP,Toshiba

const newJoins = lapArray.join('-');
console.log(newJoins); //Logitech-Dell-Asus-HP-Toshiba

//arr.reduce(fn)/ arr.reduceRight(fn)
//  ****************************************

// It is used to calculate a single value based on the array.
// syntax:
`
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
`;
// The function is applied to all array elements one after another and “carries on” its result to the next call.
// Arguments:

// a.   accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// b.   item – is the current array item.
// c.   index – is its position.
// d.   array – is the array.

//As function is applied, the result of the previous function call is passed to the next one as the first argument.

//So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

// example of arr.reduce
const newNumbers = [1, 2, 3, 4, 5];
let result = newNumbers.reduce((sum, current) => sum + current, 0);
console.log(result); //15

//[INITIAL]: if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

//But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.

const myCode = [];
// console.log(myCode.reduce((sum, current)=> sum + current));
// index.js:349
// Error: Reduce of empty array with no initial value

// -----------------------------------------------------
// So it’s advised to always specify the initial value.
// -----------------------------------------------------

// The method arr.reduceRight does the same, but goes from right to left.

// Array.isArray()
// ******************************************

// Arrays do not form a separate language type. They are based on objects.

// So typeof does not help to distinguish a plain object from an array:
const obj1 = {
  name: 'Leon',
  age: 23,
};

console.log(typeof obj1); //object

const arr1 = ['Leon', 23];
console.log(typeof arr1); //object ?why

// there’s a special method for that: Array.isArray(value).
// It returns true if the value is an array, and false otherwise.

console.log('Is it Array: ', Array.isArray(obj1)); //false
console.log('Is it Array: ', Array.isArray(arr1)); //true

// Most methods support “thisArg”
// ******************************************

// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

// syntax:
`
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument
`;
// The value of thisArg parameter becomes this for func.

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let usersAge = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = usersAge.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.

// A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

// arr.at(index)
// ********************************

// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.
// Returns the element in the array matching the given index.
// Returns undefined if the given index can not be found.

const roll = [11, 23, 45, 67, 78, 100, 33, 7];
let item3 = roll.at(2);
console.log(item3); //45;

let itemLast = roll.at(-1);
console.log(itemLast); //7

console.log(roll.at(-3)); //100
console.log(roll.at(11)); //undefined ->?Why

// arr.slice() vs arr.at()
// -------------------------------------

// slice() method returns an array.
// at() method returns an element.
console.log(roll.at(1)); //23
console.log(roll.slice(1, 2)); //[23]

// TASKS
// **************************************

// Translate border-left-width to borderLeftWidth
// -------------------------------------

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
const camelize = (str) => {
  let newStr = str.split('-');
  const result = newStr.map((item) => {
    if (newStr.indexOf(item, 0) !== 0) {
      item = item[0].toUpperCase() + item.slice(1);
    }

    return item;
  });

  return result.join('');
};

console.log(camelize('background-color')); //'backgroundColor';
console.log(camelize('list-style-image')); //'listStyleImage';
console.log(camelize('-webkit-transition')); //'WebkitTransition';

// More efficient code
const cameLize = (str) => {
  return str
    .split('-')
    .map((item) => {
      if (str.indexOf(item, 0) !== 0) {
        item = item[0].toUpperCase() + item.slice(1);
      }
      return item;
    })
    .join('');
};

console.log(cameLize('background-color')); //'backgroundColor';

// Suggested solution
const caMelize = (str) => {
  return str
    .split('-')
    .map((item, index) =>
      index > 0 ? item[0].toUpperCase() + item.slice(1) : item
    )
    .join('');
};

console.log(caMelize('-webkit-transition'));

// write the function isAnagram [codewars.com]
var isAnagram = function (test, original) {
  if (test.length === original.length && test != original) {
    let test1 = test
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .replace(/\s/g, '')
      .split('')
      .sort()
      .join('');
    //       let testUnique = [... new Set(test1)];
    let original1 = original
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .replace(/\s/g, '')
      .split('')
      .sort()
      .join('');
    //       let originalUnique = [... new Set(original1)];
    let isInclude = false;

    for (let i = 0; i < test1.length; i++) {
      if (test1[i] != original1[i]) {
        return false;
      } else {
        isInclude = true;
      }
    }

    return isInclude;
  } else {
    return false;
  }
};

console.log(isAnagram('Twoo', 'WooT')); // true
console.log(isAnagram('dumble', 'bumble')); //false
console.log(isAnagram('Buckethead', 'DeathCubeK')); //true
console.log(isAnagram('ound', 'round')); //false
console.log(isAnagram('apple', 'pale')); //false
console.log(isAnagram('!@#', '@#!')); //false ? not characters/numbers
console.log(isAnagram('123', '231')); // true
console.log(isAnagram('but', 'But')); //true
console.log(isAnagram('230', 302)); //false
console.log(isAnagram('ab!', 'ab')); //false
console.log(isAnagram('12$3', '231')); // false
console.log(isAnagram('bu t', 'tu b')); //true
console.log(isAnagram('bu t', 'tub')); //false
console.log(isAnagram('23a', 'a32')); //true

//DNA PAIRING [codewars.com]
// ****************************************

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

function DNAStrand(dna) {
  //your code here
  let newDna = dna.split('');

  let dnaArray = newDna.map((item) => {
    switch (item) {
      case 'A':
        item = 'T';
        break;
      case 'T':
        item = 'A';
        break;
      case 'C':
        item = 'G';
        break;
      case 'G':
        item = 'C';
        break;
      default:
        item = '';
        break;
    }

    return item;
  });

  return dnaArray.join('');
}

console.log(DNAStrand('AAAA')); //TTTT
console.log(DNAStrand('ATTGC')); //TAACG
console.log(DNAStrand('GTAT')); //CATA
