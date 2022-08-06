function CarDecorator(constructor: Function) {
  constructor.prototype.date = new Date();
  constructor.prototype.giveMeDate = function () {
    alert(this.date);
  };
}

function OtherDecorator() {
  return function (constructor: Function) {
    constructor.prototype.other = "Other Value";
  };
}

@OtherDecorator()
@CarDecorator
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

@CarDecorator
class Vehicle {}
const vehicle = new Vehicle();
console.log("vehicle date :", (<any>vehicle).date);

const car = new Car("Ford");
console.log(car.brand);
console.log((<any>car).date);
console.log((<any>car).giveMeDate);
