const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let userInput = null;
let userNumber = null;
let userOperator = null;
let operandA = null;
let operandB = null;
let result = null;

function determineUserInput() {
  if(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(userInput)) {
    determineUserNumber();
    determineOperands();
  } else if(["+", "-", "*", "/"].includes(userInput)) {
    if(operandA !== null && userOperator !== null && operandB !== null) {
      operateNow();
      userOperator = userInput;
    } else if(operandA == null) {
      userOperator = null;
    } else {
      userNumber = null;
      userOperator = userInput;
      display.textContent = userOperator;
      console.log(`The input is an operator: ${userOperator}`);
      };
  } else if(["Enter", "="].includes(userInput)) {
    if(operandA !== null && userOperator !== null && operandB !== null) {
      operateNow();
    } else if(userNumber !== null) {
      display.textContent = userNumber;
      console.log(`This input is Enter or =`);
    } else if(result !== null) {
      display.textContent = result;
      console.log(`This input is Enter or =`);
    } else if(userOperator !== null) {
      display.textContent = userOperator;
    } else return;
  } else if(["Backspace", "Del"].includes(userInput)) {
    if(display.textContent == userNumber) {
    userNumber = userNumber.slice(0, -1);
    display.textContent = userNumber;
    if(userNumber.length == 0) {
        userNumber = null;
      };
    determineOperands();
    } else if(display.textContent == userOperator) {
      userOperator = null;
      display.textContent = operandA;
    };
  };
};

function determineUserNumber() {
  if(userNumber == null) {
    userNumber = userInput
  } else if(userNumber.length >= 1 && userNumber.length < 13 && !userNumber.includes(".") || userNumber.length >= 1 && userNumber.length < 13 && userNumber.includes(".") && userInput !== ".") {
    userNumber += userInput;
  };
  if(userNumber.charAt(0) == '0' && userNumber.charAt(1) !== "." && userNumber.length >= 2){
    userNumber = userNumber.slice(1);
    display.textContent = userNumber;
  } else if(userNumber.charAt(0) == '.') {
    userNumber = "0" + userNumber;
    display.textContent = userNumber;
  } else display.textContent = userNumber;
  console.log(`This input is a number: ${userNumber}`);
};

function determineOperands() {
  if(userNumber !== null && userOperator == null && result == null || userNumber !== null && userOperator == null && result !== null) {
    operandA = userNumber;
    operandB = null;
    result = null;
  } else if(userNumber == null && userOperator !== null && result == null) {
    operandA = operandA;
    operandB = null;
  } else if(userNumber == null && userOperator == null && result !== null || userNumber == null && userOperator !== null && result !== null) {
    operandA = result;
    operandB = null;
  } else if(userNumber !== null && userOperator !== null && result == null) {
    operandA = operandA;
    operandB = userNumber;
  } else if(userNumber !== null && userOperator !== null && result !== null) {
    operandA = result;
    operandB = userNumber;
  } else if(userNumber == null && userOperator == null && result == null) {
    operandA = null;
    operandB = null;
  };
  console.log(`Operand A: ${operandA} and the Operator: ${userOperator}`);
  console.log(`Operand B: ${operandB} and the Operator: ${userOperator}`);
};

function operateAll(operandA, userOperator, operandB) {
  operandA = Number(operandA);
  operandB = Number(operandB);
  switch(userOperator) {
    case "+":
      result = operandA + operandB;
      break;
    case "-":
      result = operandA - operandB;
      break;
    case "*":
      result = operandA * operandB;
      break;
    case "/":
      if(operandB !== 0) {
        result = operandA / operandB;
      } else {
        alert("Can't divide by zero");
        clearAll();
      };
  };
};

function operateNow() {
  operateAll(operandA, userOperator, operandB);
  if(result !== null) {
    result = roundIfNecessary(result, 1).toString();
    if(result.length < 13) {
      display.textContent = result;
    } else {
      display.textContent = Number.parseFloat(result).toExponential(3).toString();
    };
  };
  userNumber = null;
  userOperator = null;
  operandA = result;
  operandB = null;
  console.log(`userNumber is ${userNumber}, userOperator is ${userOperator}, operandA is ${operandA}, operandB is ${operandB}, result is ${result}.`)
};

function roundIfNecessary(number, decimalPlaces) {
  const roundedNumber = number.toFixed(decimalPlaces);
  return parseFloat(roundedNumber);
};

function clearAll() {
  display.textContent = null;
  userNumber = null;
  userInput = null;
  userOperator = null;
  operandA = null;
  operandB = null;
  result = null;
  console.log("All clear.");
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    userInput = button.textContent;
    determineUserInput();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  };
  userInput = e.key;
  determineUserInput();
});

clear.addEventListener("click", () => {
  clearAll();
});