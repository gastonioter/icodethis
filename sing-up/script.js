const form = document.querySelector(".form");

form.addEventListener("focusout", handleInputsValidation);

function handleInputsValidation(e) {
  const input = e.target;
  const errorEl = input.closest(".form__group").querySelector(".text--error");
  console.log(errorEl);
  const validityState = input.validity;
  console.log(validityState);
  if (validityState.valueMissing) {
    input.setCustomValidity(`This field is requried`);
    input.classList.add("error");
  } else if (validityState.typeMismatch) {
    input.setCustomValidity(`This field is invalid`);
    input.classList.add("error");
  } else if (validityState.tooShort) {
    input.setCustomValidity(`The password must contain at least 8 characters.`);
    input.classList.add("error");
  } else {
    input.setCustomValidity("");
    input.classList.remove("error");
  }
  errorEl.innerHTML = input.validationMessage;
  console.log(input.validity);
}
