// Create a promisified version of
//      - setTimeout
//      - fetch
//      - fs.readFile

//a. setTimeout
//normal way
setTimeout(() => console.log("normal timeout"), 1000)
function greet() {
  console.log("hey there");
  return 1;
}

function promisifiedSetTimeout(time) {
  return new Promise((resolve, reject) => setTimeout(resolve(), time));
}

promisifiedSetTimeout(1000).then(greet);

//b. fs.readFile

const fs = require("fs");
// normal way
// const a = fs.readFile("./week-2/a.txt", "utf-8", (_, b) => console.log(b));

const promisifiedReadFile = (file) =>
  new Promise((resolve, reject) =>
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log("error finding the file");
        reject(err);
      } else resolve(data);
    })
  );

const a = "./week-2/2.1/a.txt";

promisifiedReadFile(a).then(console.log).catch(console.log);

//c. fetch

//normal way
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (response.ok) {
//       response.json().then((data) => console.log(data.title));
//     } else {
//       console.log("Network response not ok");
//     }
//   })
//   .catch(error => {
//     console.error("error: ", error);
//   });

function promisifiedFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        data
          .json()
          .then((res) => resolve(res.title))
          .catch(() => console.log("couldn't get the json data"));
      })
      .catch((err) => reject(err));
  });
}

promisifiedFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(console.log)
  .catch(console.log);
