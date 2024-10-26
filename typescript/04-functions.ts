/*
function name(params: type) {
  code
}
*/

// Normal Function
function add1(number1: number, number2: number) {
  return number1 + number2;
}
console.log("add1(1, 2) =>", add1(1, 2));

// Arrow Function
const add2 = (number1: number, number2: number): number => {
  return number1 + number2;
};
console.log("add2(3, 4) =>", add2(3, 4));

// 1-line Arrow Function
const add = (number1: number, number2: number): number => number1 + number2;
console.log("add(5, 6) =>", add(5, 6));

// Default Parameters
const addNum = (number1: number = 0, number2: number = 0): number => {
  return number1 + number2;
};
console.log("addNum() =>", addNum());
console.log("addNum(7) =>", addNum(7));
console.log("addNum(8, 9) =>", addNum(8, 9));

// Optional Parameters
const human = (name: string, age?: number): void => {
  console.log(`Name: ${name}`);
  if (age) {
    console.log(`Age: ${age}`);
  }
};
human("John");
human("Jane", 25);
