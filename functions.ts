function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

const sub = (n1: number, n2: number, num3 = 10): number => n1 - n2;
console.log(sub(5, 1));

const mult = function (n1: number, n2: number): number {
  return n1 * n2;
};

function add2(n1: number, n2: number, ...num3: number[]): number {
  return n1 + n2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 3, 4, 5, 6];
console.log(add2(2, 3, ...numbers));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);

console.log(concatResult, concatString);
