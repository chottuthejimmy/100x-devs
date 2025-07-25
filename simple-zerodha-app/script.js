let btn = document.getElementById("header-btn-el");

function goToSignUp() {
  //open in a new tab
  window.open("https://zerodha.com/open-account", "_blank");
}
btn.addEventListener("click", goToSignUp);
