// 📌 Get elements
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calcBtn = document.getElementById("calculate-btn");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

//  Calculate Tip
calcBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0) {
    alert("⚠ Please enter valid numbers");
    return;
  }

  const tipValue = (bill * tipPercent) / 100;
  const total = bill + tipValue;

  tipAmount.textContent = tipValue.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
});
