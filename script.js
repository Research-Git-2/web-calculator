const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

const num7 = () => {
  appendNumber("7");
};

const num8 = () => {
  appendNumber("8");
};

const num9 = () => {
  appendNumber("9");
};

const num4 = () => {
  appendNumber("4");
};

const num5 = () => {
  appendNumber("5");
};

const num6 = () => {
  appendNumber("6");
};

const num1 = () => {
  appendNumber("1");
};

const num2 = () => {
  appendNumber("2");
};

const num3 = () => {
  appendNumber("3");
};

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

      default:
        return;
    }

    display.textContent = result;
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
  }
};

const reset = () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "";
};

const seven = document.querySelector("#seven");
seven.addEventListener("click", num7);

const eight = document.querySelector("#eight");
eight.addEventListener("click", num8);

const nine = document.querySelector("#nine");
nine.addEventListener("click", num9);

const four = document.querySelector("#four");
four.addEventListener("click", num4);

const five = document.querySelector("#five");
five.addEventListener("click", num5);

const six = document.querySelector("#six");
six.addEventListener("click", num6);

const one = document.querySelector("#one");
one.addEventListener("click", num1);

const two = document.querySelector("#two");
two.addEventListener("click", num2);

const three = document.querySelector("#three");
three.addEventListener("click", num3);

const divide = document.querySelector("#D");
divide.addEventListener("click", numD);

const numSum = document.querySelector("#plus");
numSum.addEventListener("click", sum);

const numMinus = document.querySelector("#minus");
numMinus.addEventListener("click", minus);

const numMult = document.querySelector("#mult");
numMult.addEventListener("click", mult);

const dotBtn = document.querySelector("#point");
dotBtn.addEventListener("click", point);

const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate);

const clear = document.querySelector("#AC");
clear.addEventListener("click", reset);
