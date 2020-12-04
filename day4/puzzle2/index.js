const fs = require("fs");

const input = fs.readFileSync("./input.txt", {encoding: "utf-8"}).split("\n\n");

let count = 0;
for (let i = 0; i < input.length; i++) {
  let passport = input[i].split(/[\n ]/);
  let passportData = new Map();
  for (let j = 0; j < passport.length; j++) {
    passportData.set(passport[j].split(":")[0], passport[j].split(":")[1]);
  }

  let valid = true;
  ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].forEach(d => {if (!passportData.has(d)) valid = false});

  if (!valid) continue;
  
  const byr = parseInt(passportData.get("byr"));
  const iyr = parseInt(passportData.get("iyr"));
  const eyr = parseInt(passportData.get("eyr"));
  if (byr < 1920 || byr > 2002) valid = false;
  if (iyr < 2010 || iyr > 2020) valid = false;
  if (eyr < 2020 || eyr > 2030) valid = false;

  const hgt = passportData.get("hgt");
  if (!hgt.endsWith("cm") && !hgt.endsWith("in")) valid = false;
  const hgtUnit = hgt.substring(hgt.length - 2, hgt.length);
  const hgtValue = parseInt(hgt.substring(0, hgt.length - 2));
  if (hgtUnit === "cm" && (hgtValue < 150 || hgtValue > 193)) valid = false;
  if (hgtUnit === "in" && (hgtValue < 59 || hgtValue > 76)) valid = false;

  if (!(/#[0-9a-f]{6}/).test(passportData.get("hcl"))) valid = false;

  if (!(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]).includes(passportData.get("ecl"))) valid = false;

  if (passportData.get("pid").length !== 9) valid = false;

  if (valid) count++;
}

console.log(count);
