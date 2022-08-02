abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log(`IT Department - ID ${this.id}`);
  }
}

const it = new ITDepartment("d1", ["Jakub, Piotr"]);

it.describe();
it.addEmployee("Jakub");
it.addEmployee("Piotr");
it.printEmployee();

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      return (this.instance = new AccountingDepartment("d2", []));
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please insert a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
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

  describe() {
    console.log(`Accounting Department - ID ${this.id}`);
  }
}

const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went wrong");
accounting.getReports();
accounting.mostRecentReport = "Year End Report";

console.log(accounting.mostRecentReport);

const employee1 = Department.createEmployee("Max");
console.log(employee1);

accounting.describe();
