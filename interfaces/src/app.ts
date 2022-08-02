class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const accounting2 = new AccountingDepartment("d3", []);
accounting2.addReport("Something went wrong");
accounting2.getReports();
