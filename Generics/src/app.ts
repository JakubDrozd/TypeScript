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

function countAndDesc<T extends string>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements`;
  } else if (element.length === 1) {
    descriptionText = `Got ${element} element.`;
  }
  return [element, descriptionText];
}

console.log(countAndDesc("Kaczanas!"));
