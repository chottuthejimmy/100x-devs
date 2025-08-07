function goToSignUp() {
  //open in a new tab
  window.open("https://zerodha.com/open-account", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("header-btn-el");
  btn.addEventListener("click", goToSignUp);
});
