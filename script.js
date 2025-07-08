const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let userInput = null;
let userNumber = null;
let userOperator = null;
let operandA = null;
let operandB = null;
let result = null;

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