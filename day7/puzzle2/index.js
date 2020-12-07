const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n");

const holding = [["shiny gold bag"]];
let bags = 0;

for (let i = 0; holding[i] instanceof Array && holding[i].length > 0; i++) {
  holding.push([]);
  for (let j = 0; j < holding[i].length; j++) {
    const rule = input.find(r => r.startsWith(holding[i][j]));
    const right = rule.split(" contain ")[1];
    if (right === "no other bags.") continue;
    const contain = right.substring(0, right.length - 1).split(", ");
    for (let k = 0; k < contain.length; k++) {
      const numb = parseInt(contain[k].substring(0,1));
      bags += numb;
      for (let l = 0; l < numb; l++) {
        holding[i + 1].push(contain[k].endsWith("s") ? contain[k].substring(2, contain[k].length - 1) : contain[k].slice(2));
      }
    }
  }
}

console.log(bags);
