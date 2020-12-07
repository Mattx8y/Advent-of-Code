const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n");

const holding = [["shiny gold bag"]];
const bags = [];

for (let i = 0; holding[i] instanceof Array && holding[i].length > 0; i++) {
  holding.push([]);
  for (let j = 0; j < input.length; j++) {
    const ruleSides = input[j].split(" contain ");
    let right = ruleSides.pop();
    let left = ruleSides.pop()
    left  = left.substring(0, left.length - 1);
    if (right === "no other bags.") continue;
    right = right.substring(0, right.length - 1).split(", ").map(d => (d.endsWith("s") ? d.substring(2, d.length - 1) : d.slice(2)));
    
    let yes = false;
    for (let k in right) {
      if (holding[i].includes(right[k]) || holding[i].includes(right[k])) {
        yes = true;
      }
    }
    if (yes) {
      holding[i + 1].push(left);
      if (!bags.includes(left)) bags.push(left);
    };
  }
}

console.log(bags.length);
