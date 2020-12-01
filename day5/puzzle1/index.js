const fs = require("fs");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

const inputArray = input.split("\n");
let niceCount = 0;

for (let i = 0; i < inputArray.length; i++) {
  if (!!inputArray[i].match(/(?:ab|cd|pq|xy)/) || (inputArray[i].match(/[aeiou]/g) || []).length < 3 || !inputArray[i].match(/(\w)\1/)) {
    continue;
  }
  niceCount++;
}

console.log(niceCount);
