const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
