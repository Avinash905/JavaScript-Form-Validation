let user = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let pass = document.querySelector("#pass");
let confpass = document.querySelector("#confpass");
let check = document.querySelectorAll(".fa-circle-check");
let span = document.querySelector("span");
let exclam = document.querySelectorAll(".fa-circle-exclamation");
let rules = document.querySelector("#rules");
let notcheck = document.querySelector(".notchecked");
let btn = document.querySelector("#btn");
let input = document.querySelectorAll("input");
let count = 0;

btn.addEventListener("click", () => {
  if (validName()) count++;
  if (validEmail()) count++;
  if (validMobile()) count++;
  if (validPass()) count++;
  if (validRules()) count++;
  if (passCheck()) count++;
  setTimeout(() => {
    if (count == 6) {
      location.href = `submit.html?username=${user.value}`;
    }
  }, 1000);
});

input.forEach((ip) => {
  ip.addEventListener("keyup", () => {
    if (ip.id == "name") validName();
    if (ip.id == "email") validEmail();
    if (ip.id == "mobile") validMobile();
    if (ip.id == "pass") validPass();
    if (ip.id == "confpass") passCheck();
  });
});

span.addEventListener("click", () => {
  rules.checked = !rules.checked;
  if (rules.checked == true) {
    notcheck.style.visibility = "hidden";
  }
});

function validName() {
  if (user.value == "" || user.value.length < 3) {
    error(user);
    return false;
  } else {
    success(user);
    return true;
  }
}

function validEmail() {
  if (
    email.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    success(email);
    return true;
  } else {
    error(email);
    return false;
  }
}

function validMobile() {
  if (mobile.value == "" || mobile.value.length < 10) {
    error(mobile);
    return false;
  } else {
    success(mobile);
    return true;
  }
}

function validPass() {
  if (pass.value == "" || pass.value.length < 4) {
    error(pass);
    return false;
  } else {
    success(pass);
    return true;
  }
}

function validRules() {
  if (!rules.checked) {
    notcheck.style.visibility = "visible";
    return false;
  } else {
    notcheck.style.visibility = "hidden";
    return true;
  }
}

function passCheck() {
  if (pass.value != confpass.value || confpass.value == "") {
    error(confpass);
    return false;
  } else {
    success(confpass);
    return true;
  }
}

function success(element) {
  element.parentElement.querySelector(
    ".fa-circle-exclamation"
  ).style.visibility = "hidden";
  element.parentElement.querySelector(".fa-circle-check").style.visibility =
    "visible";
}

function error(element) {
  element.parentElement.querySelector(
    ".fa-circle-exclamation"
  ).style.visibility = "visible";
  element.parentElement.querySelector(".fa-circle-check").style.visibility =
    "hidden";
}
