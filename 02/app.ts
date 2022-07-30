const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
