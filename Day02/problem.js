// Logic Problems to Solve:

// 1: Swap two variables
// 2: Reverse a string
// 3: Max of 3 numbers
// 4: Celsius to Fahrenheit converter
// 5: Even/Odd check

// 1: Swap two variables

// Swap using Tharid variable
// Create a variables to store the numbers
let number1 = 10;
let number2 = 20;

// Temporary variable used for swapping
let tempValue;

// befor
console.log(`befor Swap => number1 : ${number1} || number2 : ${number2}`); // output = "befor Swap => number1 : 10 || number2 : 20"

// swap
tempValue = number1; // temVAlue =10
number1 = number2; // number1 = 20
number2 = tempValue; // number2 = 10

// after
console.log(`after Swap => number1 : ${number1} || number2 : ${number2}`); // output = after Swap => number1 : 20 || number2 : 10

// Swap without using third variable (Arithmatic operations)

// Create a variables to store the numbers
let number3 = 20;
let number4 = 30;

// befor
console.log(`befor Swap => number1 : ${number3} || number2 : ${number4}`);

// Swap

number3 = number3 + number4; // number3 = 50
number4 = number3 - number4; // number4 = 20
number3 = number3 - number4; // number3 = 30

// after
console.log(`befor Swap => number1 : ${number3} || number2 : ${number4}`);

// swap using array destructing

// Create a variables to store the numbers
let number5 = 100;
let number6 = 150;

// befor
console.log(`befor Swap => number1 : ${number5} || number2 : ${number6}`); // output = "befor Swap => number1 : 100 || number2 : 150"
// swap

[number5, number6] = [number6, number5];

// after
console.log(`befor Swap => number1 : ${number5} || number2 : ${number6}`); // output = "befor Swap => number1 : 150 || number2 : 100"

// 2: Reverse a string

// Create a variable to store the String
let origanialString = "Hello World !";

// befor
console.log(`Orginal String => ${origanialString}`); //output = Orginal String => Hello World !

// Reverse String
let eversedString = origanialString.split(" ").reverse().join(" ");
console.log(`Reverse String => ${eversedString}`); // output = "Reverse String => ! World Hello"

// 3: Max of 3 numbers

// Using If ElseIf Else

//  Create a variables to store the values
let value1 = 100;
let value2 = 200;
let value3 = 1000;

// check Value is number

if (typeof value1 === "number") {
  // check value1
  if (value1 > value2 && value1 > value3) {
    console.log(value1);

    // check value2
  } else if (value2 > value3) {
    console.log(value2);

    // check value3
  } else {
    console.log(value3); // output = 1000
  }
} else {
  console.log("Not A Nmber");
}

// Use tenory operator

// check all numbers and find max
let maxNumber =
  value1 > value2 && value1 > value3
    ? value1
    : value2 > value3
    ? value2
    : value3;

console.log(maxNumber); // output = 1000

// Using Math.Max() Method

let maxNumber2 = Math.max(value1, value2, value3);

console.log(maxNumber2); // output = 1000

// 4: Celsius to Fahrenheit converter

// Fourmal : F = (C × 9/5) + 32

// Store the celsius
let celsius = 25;

let fahrenheit;

// Check is number
if (typeof celsius === "number") {
  // Convert celsius to fahrenheit
  fahrenheit = (celsius * 9) / 5 + 32;

  //Print output
  console.log(fahrenheit); // output = 77
} else {
  console.log("Not a Number");
}

// 5: Even/Odd check

// Create a variables to store number

// using If Else

let number = 10;
console.log(number);

// check is number useing (typeof)

if (typeof number === "number") {
  if (number % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Not A number ");
}

// Using turnery

// Check is number
if (typeof number === "number") {
  // check even or odd
  let isEvenOrOdd = number % 2 == 0 ? true : false;

  //print output
  console.log(isEvenOrOdd); // output = true
} else console.log("Not A number ");
