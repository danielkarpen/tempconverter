// TODO: when i click and start typing in either input, update the other's input value with the converted temperature

// hints 1. keyup event
// 2 use function keyword so that you can use 'this'
import convert from "./lib.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", function handleKeyUp() {
    if (this.dataset.conversion === "toCelsius") {
      inputs[0].value = convert(this.value, "toCelsius");
    } else {
      inputs[1].value = convert(this.value, "toFahrenheit");
    }
  });
});
