const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("\n");
let totalRibbon = 0;
for (let i = 0; i < inputArray.length; i++) {
  let numbers = inputArray[i].split("x").map(n => parseInt(n));
  let vol = numbers[0] * numbers[1] * numbers[2];
  let n1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(n1), 1);
  let n2 = Math.min(...numbers);
  vol += (n1 * 2) + (n2 * 2);
  totalRibbon += vol;
}

console.log(totalRibbon);
