let celsiusInput = document.querySelector("#celsius");
let convertBtn = document.querySelector(".btn");
let fahrenheit = document.querySelector(".fahrenheit");

function celsiusToFahrenheit() {
  let celsius = celsiusInput.value;
  if (celsius === "" || isNaN(celsius)) {
    alert("Please enter a valid number");
    return;
  }

  let ferVal = (celsius * 9) / 5 + 32;
  fahrenheit.innerText = ferVal;
}
convertBtn.addEventListener("click", celsiusToFahrenheit);
