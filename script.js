const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let userInput = null;
let userNumber = null;
let userOperator = null;
let operandA = null;
let operandB = null;
let result = null;

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