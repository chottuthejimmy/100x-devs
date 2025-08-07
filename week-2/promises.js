class Promise2 {
  constructor(fn) {
    const afterDone = () => {
      this.resolve();
    };
    fn(afterDone);
  }

  then(callback) {
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new Promise2(something);
}

let p = setTimeoutPromisified();

function callback() {
  console.log("callback has been called");
}

p.then(callback);

const p2 = new Promise((res, rej) => {
  res("i am resolve");
  rej("i am reject");
});

p2.then(console.log).catch(console.log); // only "i am resolve" will be printed as the status is set by the order it sees / execute.
