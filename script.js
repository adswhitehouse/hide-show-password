let eyeIcon = document.querySelector(".jsEye");
let passwordInput = document.querySelector("input");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    eyeIcon.classList.add("icon-red");
    eyeIcon.classList.add("fa-eye");
    passwordInput.type = "text";
  } else {
    eyeIcon.classList.remove("icon-red");
    eyeIcon.classList.remove("fa-eye");
    passwordInput.type = "password";
  }
});
