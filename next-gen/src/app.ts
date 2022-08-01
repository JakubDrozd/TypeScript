// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");
// if (button) button.addEventListener("click", (event) => console.log(event));

// printOutput(add(5));

const hobbies: string[] = ["Sports", "Cooking"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};
const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((total, number) => total + number, 0);
};

const addedNumbers = add(5, 10, 18, 8, 93);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: username, age } = person;

console.log(username, age);
