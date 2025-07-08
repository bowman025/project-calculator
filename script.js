const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let userInput = null;
let userNumber = null;
let userOperator = null;
let operandA = null;
let operandB = null;
let result = null;

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