const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("");
const memory = {"0,0": 1};

let x = 0;
let y = 0;
for (let i = 0; i < inputArray.length; i++) {
  switch (inputArray[i]) {
    case "^":
      y++;
      break;
    case "v":
      y--;
      break;
    case ">":
      x++;
      break;
    case "<":
      x--;
      break;
  }
  memory[x + "," + y] = true;
}

console.log(Object.keys(memory).length);
