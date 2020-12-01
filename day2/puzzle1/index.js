const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("\n");
let totalPaper = 0;
for (let i = 0; i < inputArray.length; i++) {
  let numbers = inputArray[i].split("x");
  let l = numbers[0],
      w = numbers[1],
      h = numbers[2];
  let area = (2 * l * w) + (2 * w * h) + (2 * h * l);
  area += Math.min(l * w, w * h, h * l);
  totalPaper += area;
}

console.log(totalPaper);
