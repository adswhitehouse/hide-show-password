let eyeIcon = document.querySelector(".jsEye");
let passwordInput = document.querySelector("input");

let isHidden = true;
eyeIcon.addEventListener("click", () => {
  if (isHidden) {
    isHidden = false;
    eyeIcon.classList.add("icon-red");
    eyeIcon.classList.add("fa-eye");
    passwordInput.type = "text";
  } else {
    isHidden = true;
    eyeIcon.classList.remove("icon-red");
    eyeIcon.classList.remove("fa-eye");
    passwordInput.type = "password";
  }
});
