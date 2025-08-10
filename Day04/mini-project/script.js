let submitBtn = document.querySelector(".btn");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let result = document.querySelector(".show-result");
let bmiCount = document.querySelector(".count");

function calculateBMI() {
  let heightVal = parseFloat(height.value.trim());
  let weightVal = parseFloat(weight.value.trim());

  // Validation checks
  if (!heightVal || !weightVal) {
    result.innerText = "⚠ Please enter both height and weight";
    bmiCount.innerText = "";
    return;
  }
  if (heightVal <= 0 || weightVal <= 0) {
    result.innerText = "⚠ Height and weight must be positive numbers";
    bmiCount.innerText = "";
    return;
  }

  let heightM = heightVal / 100; // convert to meters
  let bmi = weightVal / heightM ** 2;

  // BMI category check
  if (bmi < 18.5) {
    result.innerText = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result.innerText = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    result.innerText = "Overweight";
  } else {
    result.innerText = "Obese";
  }

  bmiCount.innerText = `BMI: ${bmi.toFixed(2)}`;
}

submitBtn.addEventListener("click", calculateBMI);
