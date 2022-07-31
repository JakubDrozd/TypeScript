const button = document.querySelector("button")!;
button.addEventListener("click", clickHandler.bind(null, "You're welcome"));

let testNumber = 0;

function clickHandler(message: string) {
  console.log(`Clicked!!! ${message}`);
  testNumber += 1;
}

const number = "test";
console.log(number);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
