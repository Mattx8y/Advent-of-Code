const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("");
let floor = 0;
inputArray.forEach(item => {
  if (item === "(") {
    floor++;
  } else if (item === ")") {
    floor--;
  }
});

console.log(floor);
