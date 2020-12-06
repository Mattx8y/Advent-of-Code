const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n\n");

let counts = 0;
for (let i = 0; i < input.length; i++) {
  const letters = {};
  const members = input[i].split("\n");
  for (let j = 0; j < members.length; j++) {
    for (let k = 0; k < members[j].length; k++) {
      const letter = members[j].substring(k, k + 1);
      if (!letters[letter]) letters[letter] = 0;
      letters[letter]++;
    }
  }
  const validLetters = [];
  for (let letter in letters) {
    if (letters[letter] === members.length) validLetters.push(letter);
  }
  counts += validLetters.length;
}

console.log(counts);
