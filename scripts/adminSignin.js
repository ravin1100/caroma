let adminArr = [
  {
    email: "ravin@gmail.com",
    password: "ravin@123",
  },
  {
    email: "goutham@gmail.com",
    password: "goutham@123",
  },
  {
    email: "prerna@gmail.com",
    password: "prerna@123",
  },
  {
    email: "ganesh@gmail.com",
    password: "ganesh@123",
  },
];

localStorage.setItem("adminUsers", JSON.stringify(adminArr));

let emailEl = document.getElementById("mail");
let passwordEl = document.getElementById("pass");
let loginBtn = document.getElementById("reg");

loginBtn.addEventListener("click", (e) => {
  let email = emailEl.value;
  let password = passwordEl.value;
  let isEmailThere = false;
  let isPswdThere = false;
  for (let i = 0; i < adminArr.length; i++) {
    for (let j = 0; j < adminArr.length; j++) {
      if (email == adminArr[i].email) {
        isEmailThere = true;
      }
      if (password == adminArr[i].password) {
        isPswdThere = true;
      }
    }
  }
  if (isEmailThere && isPswdThere) {
    alert("Admin Login Successful");
    window.location.href = "./admin.html";
  } else {
    alert("Enter Correct Login Credentials");
  }
});
