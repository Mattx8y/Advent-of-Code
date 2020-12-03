const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n");

let totalTrees = 0;
let x = 0;
let y = 0;
for (let j = 0; j < input.length; j++) {
  x += 3;
  y++;
  if (x >= input[0].length) x -= input[0].length;
  if (!input[y]) break;
  if (input[y].charAt(x) === "#") totalTrees++;
}

console.log(totalTrees);
