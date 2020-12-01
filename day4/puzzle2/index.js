const fs = require("fs");
const md5 = require("md5");
const input = fs.readFileSync("./input.txt", {encoding: "utf-8"});

let resp;
for (let i = 0; true; i++) {
  resp = i;
  if (md5(input + i).startsWith("000000")) break;
}

console.log(resp);
