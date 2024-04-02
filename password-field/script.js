const input = document.querySelector('input[type="password"]');
const icon = document.querySelector(".password-visibility");

icon.addEventListener("click", toggleShowPassword);

function toggleShowPassword(e) {
  icon.classList.toggle("fa-eye");

  if (input.type === "text") {
    input.setAttribute("type", "password");
  } else if (input.type === "password") {
    // show
    input.setAttribute("type", "text");

    // icon.classList.add("hidden");
    // icon.classList.remove("hidden");
  }
}
