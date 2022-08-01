class Department {
  name: string = "DEFAULT";
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Jakub");
accounting.addEmployee("Piotr");
accounting.printEmployee();
