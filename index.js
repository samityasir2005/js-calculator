const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const clr = document.getElementById("clear");
const plus = document.getElementById("buttonplus");
const minus = document.getElementById("buttonminus");
const division = document.getElementById("buttondivis");
const screens = document.getElementById("num");
const equals = document.getElementById("buttonequal");

let num = 0;
let operator = "";
let firstOperand = "";
let secondOperand = "";

clr.addEventListener("click", function () {
  screens.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
});

plus.addEventListener("click", function () {
  operator = "+";
  firstOperand = screens.textContent;
  screens.textContent = "";
});
minus.addEventListener("click", function () {
  operator = "-";
  firstOperand = screens.textContent;
  screens.textContent = "";
});
division.addEventListener("click", function () {
  operator = "/";
  firstOperand = screens.textContent;
  screens.textContent = "";
});
equals.addEventListener("click", function () {
  secondOperand = screens.textContent;
  let result;

  if (operator === "+") {
    result = parseFloat(firstOperand) + parseFloat(secondOperand);
  }
  if (operator === "-") {
    result = parseFloat(firstOperand) - parseFloat(secondOperand);
  }
  if (operator === "/") {
    result = parseFloat(firstOperand) / parseFloat(secondOperand);
  }

  screens.textContent = result;
  firstOperand = "";
  secondOperand = "";
  operator = "";
});

let stringscreen = String(screen);
button0.addEventListener("click", function () {
  screens.textContent = screens.textContent + "0";
});

button1.addEventListener("click", function () {
  screens.textContent = screens.textContent + "1";
});
button2.addEventListener("click", function () {
  screens.textContent = screens.textContent + "2";
});
button3.addEventListener("click", function () {
  screens.textContent = screens.textContent + "3";
});
button4.addEventListener("click", function () {
  screens.textContent = screens.textContent + "4";
});
button5.addEventListener("click", function () {
  screens.textContent = screens.textContent + "5";
});
button6.addEventListener("click", function () {
  screens.textContent = screens.textContent + "6";
});

button7.addEventListener("click", function () {
  screens.textContent = screens.textContent + "7";
});

button8.addEventListener("click", function () {
  screens.textContent = screens.textContent + "8";
});
button9.addEventListener("click", function () {
  screens.textContent = screens.textContent + "9";
});
