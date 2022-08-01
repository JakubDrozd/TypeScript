const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) button.addEventListener("click", (event) => console.log(event));

printOutput(add(5));

const hobbies: string[] = ["Sports", "Cooking"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};
const copiedPerson = { ...person };
