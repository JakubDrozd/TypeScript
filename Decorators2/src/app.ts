// function CarDecorator(constructor: Function) {
//   constructor.prototype.date = new Date();
//   constructor.prototype.giveMeDate = function () {
//     alert(this.date);
//   };
// }

// function OtherDecorator(name: string) {
//   if (name === "Mike") {
//     return function (constructor: Function) {
//       constructor.prototype.other = "Other Value";
//     };
//   } else {
//     throw new Error("Wrong name");
//   }
// }

// @OtherDecorator("Mike")
// @CarDecorator
// class Car {
//   brand: string;
//   constructor(brand: string) {
//     this.brand = brand;
//   }
// }

// @CarDecorator
// class Vehicle {}
// const vehicle = new Vehicle();
// console.log("vehicle date :", (<any>vehicle).date);

// const car = new Car("Ford");
// console.log(car.brand);
// console.log((<any>car).date);
// console.log((<any>car).giveMeDate);

function PrintDecorator(
  target: any,
  property: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, property, descriptor);
  descriptor.writable = false;
}

function NameProperty(target: any, propertyKey: string) {
  console.log(target, propertyKey);
}

function ParameterDecorator(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(target, propertyKey, parameterIndex);
}

class Tool {
  @NameProperty
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  price() {
    console.log("$ 200");
  }

  @PrintDecorator
  print(isTrue: string, @ParameterDecorator printNumber: number) {
    console.log(`Printing tool`);
  }
}

const tool = new Tool("Hammer");
