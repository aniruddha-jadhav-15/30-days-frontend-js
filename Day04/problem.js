// 🚀 Problems to Solve:

// 1️⃣ Write a function that takes a sentence and returns the word with the most characters
// Example: "I love programming" → "programming"

// 2️⃣ Write a function that takes an array of numbers and returns a new array
// with each number squared (without using map)

// 3️⃣ Write a function that accepts a string and returns the number of unique characters
// Example: "banana" → 3

// 4️⃣ Write a function that takes two arrays and returns an array of common elements
// Example: [1, 2, 3], [2, 3, 4] → [2, 3]

// 5️⃣ Write a function that converts a given amount in rupees to USD
// (Assume 1 USD = 83 INR, but make the conversion rate a parameter)

// ---------------------------------
// 1️⃣ Longest word in a sentence
// ---------------------------------

function longestWord(str) {
  let longest = "";
  let words = str.split(" ");
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("I love programming")); // programming

// ---------------------------------
// 2️⃣ Square numbers in an array (without map)
// ---------------------------------

let squareNumbers = (numbers) => {
  let squaredArr = [];
  for (let num of numbers) {
    squaredArr.push(num * num);
  }
  return squaredArr;
};

console.log(squareNumbers([2, 3, 4])); // [4, 9, 16]

// ---------------------------------
// 3️⃣ Count unique characters in a string
// ---------------------------------

let countUniqueChars = function (str) {
  let unique = "";
  for (let char of str) {
    if (!unique.includes(char)) {
      unique += char;
    }
  }
  return unique.length;
};

console.log(countUniqueChars("banana")); // 3

// Modern way — Using Set
function countUniqueCharsSet(str) {
  return new Set(str).size;
}

console.log(countUniqueCharsSet("banana")); // 3

// ---------------------------------
// 4️⃣ Find common elements between two arrays
// ---------------------------------

function commonElements(arr1, arr2) {
  let elements = [];
  for (let item of arr1) {
    if (arr2.includes(item) && !elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}

console.log(commonElements([1, 2, 3, 3, 5, 3, 44], [2, 3, 4])); // [2, 3]

// ---------------------------------
// 5️⃣ Convert Rupees to USD
// ---------------------------------

let rupeesToUSD = (rupees, exchangeRate = 83) => {
  return +(rupees / exchangeRate).toFixed(2);
}; // rounded to 2 decimal places

console.log(rupeesToUSD(1000)); // 12.05
