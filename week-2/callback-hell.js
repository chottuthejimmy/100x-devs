// hi after 1 sec
// hello after 3sec after step 1
// hello there after 5 sec after step 2

// cleaner soln w/o promises
function hi() {
  console.log("hi");
  setTimeout(hello, 3000);
}

function hello() {
  console.log("hello");
  setTimeout(helloThere, 5000);
}

function helloThere() {
  console.log("hello there");
}

setTimeout(hi, 1000);

// --------

// With promises

const setTimeoutPromisified = (duration) => {
  return new Promise((resolve) => setTimeout(() => resolve("kid"), duration));
};

function output(str) {
  console.log(str);
}

setTimeoutPromisified(1000)
  .then(() => output("hi"))
  .then(() => setTimeoutPromisified(3000))
  .then(() => output("hello"))
  .then(() => setTimeoutPromisified(5000))
  .then(() => output("hello there"));

// -------------

// with async / await

async function solve() {
  const msg = await setTimeoutPromisified(5000);
  console.log(msg);
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(1000);
  console.log("hello there");
}

solve();
