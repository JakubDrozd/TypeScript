const button = document.querySelector("button")!;
button.addEventListener("click", () => {
  console.log(`clicked`);
});

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
