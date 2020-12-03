const fs = require("fs");

const input = fs.readFileSync("./input.txt", {encoding: "utf-8"}).split("\n");

let totalTrees = 1;
let slopeX = [1,3,5,7,1];
let slopeY = [1,1,1,1,2];
for (let i = 0; i < slopeX.length; i++) {
  let slopeTrees = 0;
  let x = 0;
  let y = 0;
  for (let j = 0; j < input.length; j++) {
    x += slopeX[i];
    y += slopeY[i];
    if (x >= input[0].length) x -= input[0].length;
    if (!input[y]) break;
    if (input[y].charAt(x) === "#") slopeTrees++;
  }
  totalTrees *= slopeTrees;
}

console.log(totalTrees);
