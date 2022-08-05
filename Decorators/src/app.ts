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

class Product {
  @Log
  title: string;
  private _price: number;

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
  getPriceTax(tax: number) {
    return this._price * (1 + tax);
  }
}
