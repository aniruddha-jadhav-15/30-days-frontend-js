// 🚀 Day 5 — Arrays & Loops Problems

// 1️⃣  Find the longest word in a sentence

// 2️⃣ Remove duplicates from an array without using `Set`

// 3️⃣ Count occurrences of each element in an array

// 4️⃣ Capitalize first letter of each word

// 5️⃣ Find sum of even numbers in an array

// 1️⃣ Find Longest Word in a Sentence
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped

// 2️⃣ Remove Duplicates Without Set
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 3️⃣ Count Occurrences of Each Element
function countOccurrences(arr) {
  let countObj = {};
  for (let item of arr) {
    countObj[item] = (countObj[item] || 0) + 1;
  }
  return countObj;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"]));
// { apple: 2, banana: 2, orange: 1 }

// 4️⃣ Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalized.join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
// Hello World From Javascript

// 5️⃣ Sum of Even Numbers in an Array
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumEvenNumbers([1, 15, 20, 25, 30])); // 50
