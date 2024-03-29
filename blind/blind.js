let modalVisible = false;

window.addEventListener("click", function (e) {
  if (e.target.id === "modal-overlay") {
    hideModal();
  }
  if (e.target.id === "red-rocket-header") {
    toggleHideable(".red-rocket");
  }
  if (e.target.id === "blue-rocket-header") {
    toggleHideable(".blue-rocket");
  }
  if (e.target.id === "green-rocket-header") {
    toggleHideable(".green-rocket");
  }
});

window.addEventListener("focusout", (e) => {
  if (modalVisible) {
    if (["input-name", "input-address", "input-email"].includes(e.target.id)) {
      updateProgressBar();
      validate(e.target.id);
    }
  }
});

function updateProgressBar() {
  let progressBar = document.getElementById("progress-bar");
  let nameInput = document.getElementById("input-name");
  let addressInput = document.getElementById("input-address");
  let emailInput = document.getElementById("input-email");
  let progress = 0;
  progress += !validateEmailInput(emailInput.value) ? 1.0 : 0.0;
  progress += !validateAddressInput(addressInput.value) ? 1.0 : 0.0;
  progress += !validateNameInput(nameInput.value) ? 1.0 : 0.0;

  progressBar.style.width = (100 * progress) / 3 + "%";
}

function buy() {
  if (validate()) {
    hideModal();
  }
}

function showModal() {
  document.getElementById("modal-overlay").style.display = "flex";
  document.getElementById("input-name").focus();
  modalVisible = true;
}

function hideModal() {
  document.getElementById("modal-overlay").style.display = "none";
  modalVisible = false;
}

function toggleHideable(hideableClass) {
  document.querySelector(hideableClass).classList.toggle("hidden");
}

function validate(inputId = undefined) {
  let nameValidationMessage = "";
  let addressValidationMessage = "";
  let emailValidationMessage = "";
  if (inputId === undefined || inputId === "input-name") {
    let nameInput = document.getElementById("input-name");
    nameValidationMessage = validateNameInput(nameInput.value);
    document.getElementById("validation-error-name").innerText =
      nameValidationMessage;
  }
  if (inputId === undefined || inputId === "input-address") {
    let addressInput = document.getElementById("input-address");
    addressValidationMessage = validateAddressInput(addressInput.value);
    document.getElementById("validation-error-address").innerText =
      addressValidationMessage;
  }
  if (inputId === undefined || inputId === "input-email") {
    let emailInput = document.getElementById("input-email");
    emailValidationMessage = validateEmailInput(emailInput.value);
    document.getElementById("validation-error-email").innerText =
      emailValidationMessage;
  }

  return (
    !nameValidationMessage &&
    !addressValidationMessage &&
    !emailValidationMessage
  );
}

function validateNameInput(name) {
  return !name ? "Navn er påkrevd" : "";
}

function validateAddressInput(address) {
  return !address ? "Addresse er påkrevd" : "";
}

function validateEmailInput(email) {
  if (!email) {
    return "Epost er påkrevd";
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Eposten er ikkje gyldig";
  }
  return "";
}
