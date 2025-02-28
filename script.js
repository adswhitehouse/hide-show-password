let eyeIcon = document.querySelector(".jsEye");
let passwordInput = document.querySelector("input");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    eyeIcon.classList.add("icon-red", "fa-eye");
    passwordInput.type = "text";
  } else {
    eyeIcon.classList.remove("icon-red", "fa-eye");
    passwordInput.type = "password";
  }
});
