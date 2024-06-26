let input = "";
let result = "";

function clearScreen() {
  input = "";
  result = "";
  document.getElementById("result").value = "";
}

function appendInput(value) {
  input += value;
  document.getElementById("result").value = input;
}

function calculate() {
  result = eval(input);
  document.getElementById("result").value = result;
  input = "";
}
