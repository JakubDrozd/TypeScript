//GENERICS
const names: Array<string> = ["Max", "Manuel"];
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);

  reject("...");
});

promise.then((data) => {
  data.split(" ");
});

//CREATING A GENERIC FUNCTION
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj);
