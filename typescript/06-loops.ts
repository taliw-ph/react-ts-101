// Loops
/*
for (initialize; condition; update) {
    // statements
}
*/

// For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Loop ended");

let i: number = 1; // initialize
for (; i <= 10; ) {
  // condition
  console.log(i);
  i++; // update
}
console.log("Loop ended");

// For Of
// Iterate over array
let seasons: string[] = ["winter", "spring", "summer", "fall"];
for (let item of seasons) {
  console.log(item);
}

// Iterate over string
let city: string = "Mississippi";
for (let char of city) {
  console.log(char);
}

// For In
let colors: string[] = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`colors[${index}] = ${colors[index]}`);
}

let arr = [10, 20, 30, 40];
for (var index in arr) {
  console.log(index, arr[index]);
}
