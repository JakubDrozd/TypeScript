//CLASS DECORATOR

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  console.log(`LOGGER FACTORY`);

  return function (constructor: any) {
    console.log(`Rendering template`);
    const hookEl = document.getElementById(hookID);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object");
  }
}

const p1 = new Person();

console.log(p1);

// ----

function Log(target: any, propertyName: string | Symbol) {
  console.log(`Property decorator`);
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(`Accessor decorator`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(`Method decorator`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log(`Parameter decorator`);
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  setPrice(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price: should be positive");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  @Log3
  getPriceTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const pr1 = new Product("Book", 19);
const pr2 = new Product("Book 2", 29);
