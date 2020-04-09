const inputElement = document.getElementById("my-input");
const outputElement = document.getElementById("output");

inputElement.addEventListener("change", updateValue);

function updateValue(e) {
  const value = e.target.value;

  outputElement.textContent = value;
}
