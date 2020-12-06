const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n\n");

let counts = 0;
for (let i = 0; i < input.length; i++) {
  const letters = [];
  const members = input[i].split("\n");
  for (let j = 0; j < members.length; j++) {
    for (let k = 0; k < members[j].length; k++) {
      const letter = members[j].substring(k, k + 1);
      if (!letters.includes(letter)) letters.push(letter);
    }
  }
  counts += letters.length;
}

console.log(counts);
