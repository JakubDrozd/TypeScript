interface InterfaceAddFn {
  (a: number, b: number): number;
}

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there I'm");

console.log(user1);

let user2: Greetable;

user2 = new Person();

console.log(user2);
