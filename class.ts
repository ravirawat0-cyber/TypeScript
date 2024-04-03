import { Login, User } from "./interface";
class Employee implements Login {
  #id: number; //private
  protected name: string;
  address: string;

  get empId(): number {
    return this.#id;
  }
  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }
  login(): User {
    return { name: "John", id: 1, email: "abc@gmail.com" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}.`;
  }
}

class Manger extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}.`;
  }
}

let john = new Employee(1, "John", "highway 71");
Employee.getEmployeeCount();

// john.id = 1;
// john.name = "John";
// john.address = "highway 71";
john.empId = 100;

console.log(john);

console.log(john.getNameWithAddress());

let mike = new Manger(2, "mike", "marine drive");
console.log(mike.getNameWithAddress());
