function timeout(i){
    console.log("hi from", i);
}

for (let i=10; i>0; i--){
    console.log("i is: ",i);
    setTimeout(() =>timeout(i), i*1000);
}

// ------------------------------------
const random = Math.random() > 0.5;

function yay() {
  console.log("yayyy");
}
function nah() {
  console.log("nah");
}

setTimeout(()=> console.log("ah"), 0);

const promise = new Promise((resolve, reject) => {
  if (random) {
    resolve(yay());
  } else {
    reject(nah());
  }
});

promise.then(_ => console.log("inside then")).catch(_ => console.log("inside catch"));
 console.log("sup");

 /**
  * OUTPUT :
  * yay or nah depending on whether random is true or false, the executor function is executed asynchronously 
  * sup
  * inside then / inside catch
  * ah
  * 
  */

 // ------------------------------
