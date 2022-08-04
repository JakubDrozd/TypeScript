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

// KEYOF

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//CREATING GENERIC CLASSES (DO NOT USE WITH OBJECTS, ONLY PRIMITIVE)
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    console.log([...this.data]);
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Jakub");
textStorage.removeItem("Max");
textStorage.getItems();

const numberStorage = new DataStorage<number>();
numberStorage.addItem(259);
numberStorage.addItem(999);
numberStorage.addItem(111);
numberStorage.addItem(138);

const textAndNumbersStorage = new DataStorage<string | number>();
textAndNumbersStorage.addItem("Max");
textAndNumbersStorage.addItem(10);
textAndNumbersStorage.addItem("Jakub");
textAndNumbersStorage.addItem(999);
textAndNumbersStorage.getItems();

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Max", age: 30 });
objStorage.addItem({ name: "Jakub", age: 19 });
objStorage.getItems();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

//BUILT-IN UTILITY TYPES

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

const names2: ReadonlyArray<string> = ["Max", "Piotr"];
