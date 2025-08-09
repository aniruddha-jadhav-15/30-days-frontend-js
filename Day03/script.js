// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Variables
let guessCount = 0;
const maxGuesses = 10;
let guessedNumbers = [];

// DOM elements
const guessInput = document.getElementById("user-input");
const guessBtn = document.querySelector(".btn");
const noGuessSpan = document.getElementById("no-guess");
const guessedNoSpan = document.getElementById("guessed-no");
const instructions = document.querySelector(".instructions");

// Guess button click event
guessBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    instructions.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  guessCount++;
  guessedNumbers.push(userGuess);

  // Update UI
  noGuessSpan.textContent = guessCount;
  guessedNoSpan.textContent = guessedNumbers.join(", ");

  if (userGuess === randomNumber) {
    instructions.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    guessBtn.disabled = true;
  } else if (guessCount >= maxGuesses) {
    instructions.textContent = `❌ Game Over! The number was ${randomNumber}.`;
    guessBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    instructions.textContent = "📉 Too low. Try again!";
  } else {
    instructions.textContent = "📈 Too high. Try again!";
  }

  guessInput.value = "";
  guessInput.focus();
});
