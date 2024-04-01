const iconsParent = document.querySelector(".from__field");
const input = document.querySelector('input[type="password"]');
const showIcon = document.querySelector(".show");
const hiddeIcon = document.querySelector(".hidde");

init();
function init() {
  hiddeIcon.classList.add("hidden");
  showIcon.classList.remove("hidden");
}
console.log(showIcon);

iconsParent.addEventListener("click", toggleShowPassword);

function toggleShowPassword(e) {
  if (!e.target.matches(".icon--right")) return;

  console.log(input.type);
  if (input.type === "text") {
    input.setAttribute("type", "password");
    showIcon.classList.add("hidden");
    hiddeIcon.classList.remove("hidden");
  } else if (input.type === "password") {
    // show
    input.setAttribute("type", "text");
    hiddeIcon.classList.add("hidden");
    showIcon.classList.remove("hidden");
  }
}
