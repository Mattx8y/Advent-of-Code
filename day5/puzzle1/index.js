const fs = require("fs");

const input = fs.readFileSync("../input.txt", {encoding: "utf-8"}).split("\n");

let highest = 0;
for (let i = 0; i < input.length; i++) {
  const rows = input[i].substring(0,7).split("");
  const columns = input[i].substring(7,10).split("");
  
  let rowMin = 0;
  let rowMax = 127;
  for (let j = 0; j < rows.length; j++) {
    let mid = (rowMin + rowMax) / 2;
    if (rows[j] === "F") {
      rowMax = Math.floor(mid);
    } else {
      rowMin = Math.ceil(mid);
    }
  }

  let columnMin = 0;
  let columnMax = 7;
  for (let j = 0; j < columns.length; j++) {
    let mid = (columnMin + columnMax) / 2;
    if (columns[j] === "L") {
      columnMax = Math.floor(mid);
    } else {
      columnMin = Math.ceil(mid);
    }
  }

  const id = (rowMin * 8) + columnMin;
  if (id > highest) highest = id;
}

console.log(highest);
