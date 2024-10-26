// Assignment Operator
let year: number = 2024;

// Mathematic Operator
let a: number = 5;
let b: number = 2;

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

// Comparison Operator
let money: number = 120;
if (money >= 100) {
  console.log("You can buy this computer.");
} else {
  console.log("Sorry, you don't have enough money.");
}

let myAge: number = 10;
let yourAge: number = 13;
if (myAge == yourAge) {
  console.log("We are friend.");
} else if (myAge < yourAge) {
  console.log("I'm your younger brother or sister.");
} else {
  console.log("I'm your older brother or sister.");
}

// Logical Operator
console.log("========== AND ==========");
console.log(`true && true = ${true && true}`);
console.log(`true && false = ${true && false}`);
console.log(`false && true = ${false && true}`);
console.log(`false && false = ${false && false}`);

console.log("========== OR ==========");
console.log(`true || true = ${true || true}`);
console.log(`true || false = ${true || false}`);
console.log(`false || true = ${false || true}`);
console.log(`false || false = ${false || false}`);

console.log("========== NOT ==========");
console.log(`!true = ${!true}`);
console.log(`!false = ${!false}`);
