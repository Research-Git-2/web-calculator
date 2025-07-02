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

const calculate = () => {
  if (firstNumber !== "" && secondNumber !== "" && operator === "/") {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    
    if (num2 === 0) {
      display.textContent = "Ошибка: деление на 0";
      reset();
      return;
    }
    
    const result = num1 / num2;
    display.textContent = result;
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
  }
};

// Функция сброса
const reset = () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "";
};

// Привязка событий к кнопкам
const seven = document.querySelector("#seven");
seven.addEventListener("click", num7);

const eight = document.querySelector("#eight");
eight.addEventListener("click", num8);

const nine = document.querySelector("#nine");
nine.addEventListener("click", num9);

const divide = document.querySelector("#D");
divide.addEventListener("click", numD);

// Добавляем кнопку для вычисления результата (например, кнопка "=")
const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate);

// Добавляем кнопку сброса (опционально)
const clear = document.querySelector("#clear");
clear.addEventListener("click", reset);