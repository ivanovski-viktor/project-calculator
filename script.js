console.log("Setup!");
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// OPERATE FUNCTION
let num1;
let num2;
let operator = "";
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 === 0) {
        return "ERROR!";
      }
      return divide(num1, num2);
  }
}
//CATCHING CLICK EVENTS
let result = document.querySelector("#result");
let btnsClass = document.querySelectorAll(".btns-class");
let operatorClass = document.querySelectorAll(".operator-class");
let solutionClass = document.querySelector(".solution-class");

let clear = document.querySelector(".clear").addEventListener("click", () => {
  result.textContent = "";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
});

// ADDING CLICK FUNCTIONALITY TO BUTTONS
btnsClass.forEach((btn) => {
  btn.addEventListener("click", () => {
    result.textContent += btn.value;

    if (!operator) {
      if (!num1) {
        num1 = btn.value;
      } else {
        num1 += btn.value;
      }
    } else {
      if (!num2) {
        num2 = btn.value;
      } else {
        num2 += btn.value;
      }
    }
  });
});

operatorClass.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operator) {
      result.textContent += btn.value;
      operator = btn.value;
    }
  });
});

solutionClass.addEventListener("click", () => {
  const calculatedResult = operate(
    operator,
    parseFloat(num1),
    parseFloat(num2)
  );
  result.textContent = calculatedResult;
  num1 = calculatedResult;
  num2 = undefined;
  operator = undefined;
});
