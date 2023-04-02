var stored = JSON.parse(localStorage.getItem("signUpData"));
let popup = document.querySelector("#popup");
document.querySelector("#reg").addEventListener("click", loginchek);

function loginchek() {
  var email = document.querySelector("#mail").value;
  var password = document.querySelector("#pass").value;

  var flag1 = false;
  var flag2 = false;

  for (var i = 0; i < stored.length; i++) {
    // console.log(stored[i]);
    if (stored[i].email === email && stored[i].enterPass === password) {
      flag1 = true;
      flag2 = true;
    }
  }
  if (flag1 == true && flag2 == true) {
    // alert("Login Successful");
    openPopup();
  } else {
    alert("Login Failed!");
  }
}

function openPopup() {
  // popup.style.display = "block";
  popup.classList.add("open-popup");
}
function closePopup() {
  // popup.style.display = "block";
  popup.classList.remove("open-popup");
  window.location.href = "index.html";
}
