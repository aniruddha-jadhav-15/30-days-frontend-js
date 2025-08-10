// 🚀 Problems to Solve:
// 1: Factorial (loop + recursion)
// 2: Palindrome (manual + reverse method)
// 3: Sum from 1 to N (loop + formula)
// 4: Largest in array (loop + Math.max)
// 5: Smallest in array (loop + Math.min)
// 6: Vowel count
// 7: Prime number check
// 8: Random number generator

// ---------------------------------------------------
// 1️⃣ Factorial (loop + recursion)
// ---------------------------------------------------

// Factorial using a loop
const num = 5; // number to find factorial
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i; // multiply fact by i
}
console.log("Factorial (loop):", fact); // 120

// Factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) return 1; // base case
  return n * factorial(n - 1); // recursive step
}
console.log("Factorial (recursion):", factorial(5)); // 120

// ---------------------------------------------------
// 2️⃣ Palindrome check (manual + reverse method)
// ---------------------------------------------------

// Manual method: check by reversing manually
function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str;
}
console.log("Palindrome (manual):", isPalindrome("madam")); // true

// Using reverse() method
const isPalindrome2 = (str) => str.split("").reverse().join("") === str;
console.log("Palindrome (reverse):", isPalindrome2("mom")); // true

// ---------------------------------------------------
// 3️⃣ Sum from 1 to N (loop + formula)
// ---------------------------------------------------

// Loop method
const n = 10;
let sumLoop = 0;
for (let i = 1; i <= n; i++) {
  sumLoop += i;
}
console.log("Sum (loop):", sumLoop); // 55

// Formula method: sum = n(n+1)/2
const sumFormula = (n * (n + 1)) / 2;
console.log("Sum (formula):", sumFormula); // 55

// ---------------------------------------------------
// 4️⃣ Largest in array (loop + Math.max)
// ---------------------------------------------------

// Loop method
function largestInArray(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
  }
  return largest;
}
console.log("Largest (loop):", largestInArray([1, 2, 45])); // 45

// Math.max method
const largestInArray2 = (numbers) => Math.max(...numbers);
console.log("Largest (Math.max):", largestInArray2([1, 2, 45])); // 45

// ---------------------------------------------------
// 5️⃣ Smallest in array (loop + Math.min)
// ---------------------------------------------------

// Loop method
function smallestInArray(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i];
  }
  return smallest;
}
console.log("Smallest (loop):", smallestInArray([1, 2, 4, 0])); // 0

// Math.min method
const smallestInArray2 = (numbers) => Math.min(...numbers);
console.log("Smallest (Math.min):", smallestInArray2([12, 2, 343])); // 2

// ---------------------------------------------------
// 6️⃣ Vowel count
// ---------------------------------------------------
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log("Vowel count:", countVowels("Hello world")); // 3

// ---------------------------------------------------
// 7️⃣ Prime number check
// ---------------------------------------------------
function isPrime(num) {
  if (num <= 1) return false; // 0, 1 are not prime
  if (num <= 3) return true; // 2, 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false;

  // check divisors from 5 to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log("Prime check:", isPrime(2)); // true

// ---------------------------------------------------
// 8️⃣ Random number generator
// ---------------------------------------------------
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log("Random number (1-100):", randomNumber());
