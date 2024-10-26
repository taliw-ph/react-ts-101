// Conditional
/*
if (condition1) {
    // statements
} else if (condition2) {
    // statements
} else {
    // statements
}
*/

let score: number = 37;

console.log(`Your score is ${score}.`);
console.log("Let's see which grade you'd get.");

if (score >= 80 && score <= 100) {
  console.log("Your grade is A.");
} else if (score >= 70 && score < 80) {
  console.log("Your grade is B.");
} else if (score >= 60 && score < 70) {
  console.log("Your grade is C.");
} else if (score >= 50 && score < 60) {
  console.log("Your grade is D.");
} else {
  console.log("Your grade is F.");
}

// Ternary Operator or Conditional Operator
/*
let result: any = condition ? expression1 : expression2; 
*/
let n: number = 5;
let result: string = n % 2 == 1 ? "odd" : "even";

console.log(`${n} is ${result} number.`);

n = 5;
if (n % 2 == 1) {
  result = "odd";
} else {
  result = "even";
}

console.log(`${n} is ${result} number.`);
