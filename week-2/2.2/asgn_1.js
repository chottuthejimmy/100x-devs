// Write a function that
// 1. Reads file
// 2. Trims the extra spaces from left and right
// 3. writes it back to the file

const fs = require("fs");

function trimExtraSpace(contents) {
  return contents
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
}

function writeFileBack(file, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, contents, (err) => {
      if (err) reject(err);
      else resolve("File written successfully");
    });
  });
}

function cleanFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) reject("couldn't read the file");
      else resolve(contents.toString());
    });
  });
}

const a = "week-2/2.1/a.txt";
cleanFile(a)
  .then((contents) => {
    const trimmedContents = trimExtraSpace(contents);
    return writeFileBack(a, trimmedContents);
  })
  .then(console.log)
  .catch(console.log);
