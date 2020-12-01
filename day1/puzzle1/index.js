const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("");
let floor = 0;
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === "(") {
    floor++;
  } else if (inputArray[i] === ")") {
    floor--;
  }
};

console.log(floor);
