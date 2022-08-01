class Department {
  name: string = "DEFAULT";
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);

const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
