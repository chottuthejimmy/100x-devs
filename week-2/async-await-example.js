// Using your helper:
const setTimeoutPromisified = (duration) =>
  new Promise((resolve) => setTimeout(() => resolve(), duration));

async function A() {
  console.log("A start");
  await setTimeoutPromisified(3000); // pauses A only
  console.log("A after 3s");
}

async function B() {
  console.log("B start");
  await setTimeoutPromisified(1000); // pauses B only
  console.log("B after 1s");
}

// A heartbeat to show the event loop isn't blocked
let ticks = 0;
const id = setInterval(() => {
  console.log("tick", ++ticks);
  if (ticks === 5) clearInterval(id);
}, 500);

console.log("before calls");
A(); // returns a Promise immediately
B(); // returns a Promise immediately
console.log("after calls");
