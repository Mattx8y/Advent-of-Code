const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n\n");

let count = 0;
for (let i = 0; i < input.length; i++) {
  let passport = input[i].split(/[\n ]/);
  let passportData = new Map();
  for (let j = 0; j < passport.length; j++) {
    passportData.set(passport[j].split(":")[0], passport[j].split(":")[1]);
  }
  let valid = true;
  ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].forEach(d => {if (!passportData.has(d)) valid = false});
  if (valid) count++;
}

console.log(count);
