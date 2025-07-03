const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

const num7 = () => appendNumber("7");
const num8 = () => appendNumber("8");
const num9 = () => appendNumber("9");
const num4 = () => appendNumber("4");
const num5 = () => appendNumber("5");
const num6 = () => appendNumber("6");
const num1 = () => appendNumber("1");
const num2 = () => appendNumber("2");
const num3 = () => appendNumber("3");
const num0 = () => appendNumber("0");

const appendNumber = (num) => {
  if (operator === "") {
    firstNumber += num;
    display.textContent = firstNumber;
  } else {
    secondNumber += num;
    display.textContent = firstNumber + " " + operator + " " + secondNumber;
  }
};

const numD = () => {
  if (firstNumber !== "" && operator === "") {
    operator = "/";
    display.textContent = firstNumber + " " + operator;
  }
};

const numPer = () => {
  if (firstNumber !== "" && operator === "") {
    operator = "%";
    display.textContent = firstNumber + " " + operator;
  }
};

const sum = () => {
  if (firstNumber !== "" && operator === "") {
    operator = "+";
    display.textContent = firstNumber + " " + operator;
  }
};

const minus = () => {
  if (firstNumber !== "" && operator === "") {
    operator = "-";
    display.textContent = firstNumber + " " + operator;
  }
};

const mult = () => {
  if (firstNumber !== "" && operator === "") {
    operator = "*";
    display.textContent = firstNumber + " " + operator;
  }
};

const point = () => {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += firstNumber === "" ? "0." : ".";
      display.textContent = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += secondNumber === "" ? "0." : ".";
      display.textContent = firstNumber + " " + operator + " " + secondNumber;
    }
  }
};

const calculate = () => {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    switch (operator) {
      case "/":
        if (num2 === 0) {
          display.textContent = "Ошибка: деление на 0";
          reset();
          return;
        }
        result = num1 / num2;
        break;
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "%":
        result = (num1 * num2) / 100;
        break;
      default:
        return;
    }

    result = parseFloat(result.toFixed(4));
    display.textContent = result;
    addToHistory(`${num1} ${operator} ${num2}`, result);
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
  }
};

const root = () => {
  if (firstNumber !== "" && operator === "") {
    const num = parseFloat(firstNumber);

    if (num < 0) {
      display.textContent = "Ошибка: √ из отрицательного";
      reset();
      return;
    }

    const result = Math.sqrt(num);
    display.textContent = result;
    addToHistory(`√${num}`, result);
    firstNumber = result.toString();
  } else {
    display.textContent = "Ошибка: сначала введите число";
    reset();
  }
};

const pow = () => {
  if (firstNumber !== "" && operator === "") {
    const num = parseFloat(firstNumber);
    const result = Math.pow(num, 2);
    display.textContent = result;
    addToHistory(`${num}²`, result);
    firstNumber = result.toString();
  } else {
    display.textContent = "Ошибка: сначала введите число";
    reset();
  }
};

const reset = () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
};

const addToHistory = (expr, result) => {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = `${expr} = ${result}`;
  historyList.prepend(li);
};

document.querySelector("#pow").addEventListener("click", pow);
document.querySelector("#root").addEventListener("click", root);
document.querySelector("#seven").addEventListener("click", num7);
document.querySelector("#eight").addEventListener("click", num8);
document.querySelector("#nine").addEventListener("click", num9);
document.querySelector("#four").addEventListener("click", num4);
document.querySelector("#five").addEventListener("click", num5);
document.querySelector("#six").addEventListener("click", num6);
document.querySelector("#one").addEventListener("click", num1);
document.querySelector("#two").addEventListener("click", num2);
document.querySelector("#three").addEventListener("click", num3);
document.querySelector("#zero").addEventListener("click", num0);
document.querySelector("#D").addEventListener("click", numD);
document.querySelector("#per").addEventListener("click", numPer);
document.querySelector("#plus").addEventListener("click", sum);
document.querySelector("#minus").addEventListener("click", minus);
document.querySelector("#mult").addEventListener("click", mult);
document.querySelector("#point").addEventListener("click", point);
document.querySelector("#equal").addEventListener("click", calculate);
document.querySelector("#AC").addEventListener("click", reset);
