const fs = require("fs");
const md5 = require("md5");
const input = fs.readFileSync("../input.txt", {encoding: "utf-8"});

let hex = "0";
for (let i = 0; true; i++) {
  hex = i.toString(16);
  if (md5(input + hex).startsWith("00000")) break;
}

console.log(hex);
