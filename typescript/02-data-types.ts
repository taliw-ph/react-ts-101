// Data Types: Boolean
const isTrueBool: boolean = true;
const thisIsTrue = true;
const isFalseBool: boolean = false;
const thisIsFalse = false;
console.log("Line6 :", typeof isTrueBool);

// Data Types: Number
const integer: number = 6;
const float: number = 6.6;
const negative: number = -6;
const day: number = 31;

// Data Types: String
const text: string = "Hello, World!";
const char: string = "A";
const multiline: string = `Hello,
World!`;
const longText = char + ": " + text;
const stringTemplate: string = `October has ${day} days`;
console.log("Line21 :", longText);
console.log("Line22 :", stringTemplate);

// Data Types: Array
const numbers: number[] = [1, 2, 3];
const booleans: Array<boolean> = [true, false];
const strings: string[] = ["a", "b", "c"];
console.log("Line28 :", typeof booleans);
console.log("Line29 :", booleans);

// Data Types: Object
const room = {
  id: 4409,
  name: "Room 4409",
  description: "Computer Lab",
};
console.log("Line37 :", typeof room);
console.log("Line38 :", room);

// Data Types: Any
// const x = undefined;
// const y = null;
