const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("");
const memory = {"0,0": 1};

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
for (let i = 0; i < inputArray.length; i++) {
  switch (inputArray[i]) {
    case "^":
      i % 2 === 0 ? y1++ : y2++;
      break;
    case "v":
      i % 2 === 0 ? y1-- : y2--;
      break;
    case ">":
      i % 2 === 0 ? x1++ : x2++;
      break;
    case "<":
      i % 2 === 0 ? x1-- : x2--;
      break;
  }
  memory[(i % 2 === 0 ? x1 : x2) + "," + (i % 2 === 0 ? y1 : y2)] = true;
}

console.log(Object.keys(memory).length);
