class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const accounting = new Department("d1", "Accounting");

const it = new ITDepartment("d2", ["Jakub, Piotr"]);

it.describe();
it.addEmployee("Jakub");
it.addEmployee("Piotr");
it.printEmployee();

accounting.describe();
accounting.addEmployee("Jakub");
accounting.addEmployee("Piotr");
accounting.printEmployee();

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please insert a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const accounting2 = new AccountingDepartment("d3", []);
accounting2.addReport("Something went wrong");
accounting2.getReports();
accounting2.mostRecentReport = "Year End Report";

console.log(accounting2.mostRecentReport);

const employee1 = Department.createEmployee("Max");
console.log(employee1);
