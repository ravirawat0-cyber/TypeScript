"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
const sub = (n1, n2, num3 = 10) => n1 - n2;
console.log(sub(5, 1));
const mult = function (n1, n2) {
    return n1 * n2;
};
function add2(n1, n2, ...num3) {
    return n1 + n2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 3, 4, 5, 6];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult, concatString);
