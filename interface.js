"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "abc@gmail.com" };
let { name: userName, email } = { name: "John", id: 1, email: "" };
let employee = { name: "ravi", id: 3, email: "abc", salary: 1234 };
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "abc@gmail.com" },
    { name: "John1", id: 2, email: "abc@gmail.com" },
    { name: "Joh2", id: 3, email: "abc@gmail.com" },
    { name: "John3", id: 4, email: "abc@gmail.com" },
];
console.log(user1, user2, restUsers);
let result = restUsers.filter((user) => user.id > 3);
console.log(result);
