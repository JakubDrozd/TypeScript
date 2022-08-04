type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["Create server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add("Max", "Schwartz");
result.split(" ");

const fetchUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
    desc: "My own company",
  },
};

console.log(fetchUserData?.job?.title);

const userInput = undefined!;
const storedData = userInput ?? "DEFAULT";

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  if ("privileges" in employee) {
    console.log(`Privileges ${employee.privileges}`);
  }
  if ("startDate" in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log(`Driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck...`);
  }
  loadCargo() {
    console.log("Loading cargo...");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi there!";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email.",
  username: "Must start with capital letter.",
};
