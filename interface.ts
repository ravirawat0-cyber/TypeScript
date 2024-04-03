export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "John", id: 1, email: "abc@gmail.com" };
let { name: userName, email }: User = { name: "John", id: 1, email: "" };

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "ravi", id: 3, email: "abc", salary: 1234 };

export interface Login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  { name: "John", id: 1, email: "abc@gmail.com" },
  { name: "John1", id: 2, email: "abc@gmail.com" },
  { name: "Joh2", id: 3, email: "abc@gmail.com" },
  { name: "John3", id: 4, email: "abc@gmail.com" },
];
console.log(user1, user2, restUsers);

let result = restUsers.filter((user) => user.id > 3);
console.log(result);
