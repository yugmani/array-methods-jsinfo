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

// Filter range
// -------------------------------------------

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

const filterRange = (arr, a, b) => {
  return arr.filter((item) => item >= a && item <= b);
};

let array11 = [5, 3, 8, 1];
console.log(filterRange(array11, 1, 4)); // [3, 1];
console.log(array11); // [5, 3, 8, 1]

let array22 = [15, 31, 81, 21, 45];
console.log(filterRange(array22, 21, 50)); // [31, 21, 45]
console.log(array22); //[15, 31, 81, 21, 45]

// Filter range "in place"
// -------------------------------------------

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.
const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((item, index) =>
    item >= a && item <= b ? item : arr.splice(index, 1)
  );
};

let array33 = [5, 3, 8, 1];
console.log(filterRangeInPlace(array33, 1, 4));
console.log(array33); //[3, 1]

// Sort in decreasing order
// ---------------------------------------------

let arr = [5, 2, 1, -10, 8];

console.log(arr.sort((a, b) => b - a)); //[8, 5, 2, 1, -10]

const compareTwo = (a, b) => (a < b ? b : a);
console.log(arr.sort(compareTwo)); // [8, 5, 2, 1, -10]

// Copy and sort array
// ---------------------------------------------

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.
let arrWeb = ['HTML', 'JavaScript', 'CSS'];
const copySorted = arrWeb.map((element) => element).sort();

console.log(copySorted); //["CSS", "HTML", "JavaScript"]
console.log(arrWeb); //["HTML", "JavaScript", "CSS"]

//suggested solution
const copyAndSort = (arr)=>{
return arr.slice().sort();
}

console.log(copyAndSort(arrWeb));

// write the function isAnagram [codewars.com]
// -------------------------------------------

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
