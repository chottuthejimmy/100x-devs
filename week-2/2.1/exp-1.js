function sum(a, b) {
  return a + b;
}

// const ans = sum(2, "3")
// console.log(ans)

import fs from "fs";

function print(err, content) {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(content);
  }
}

const txt = fs.readFile("a.txt", "utf-8", print);
const txt3 = fs.readFile("c.txt", "utf-8", (e) => {
  if (e) {
    if (e.errno === -2) {
      console.error("Error reading file:", e.errno);
    } else {
      console.error("Unknown error:", e);
    }
  }
});
const txt2 = fs.readFileSync("b.txt", "utf-8");
console.log(txt2);
