document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("rocket-dialog");
  document.getElementById("openDialog").addEventListener("click", () => {
      dialog.showModal();
  });
  document.getElementById("closeDialog").addEventListener("click", () => {
      dialog.close();
  });

  document.getElementById("buy").addEventListener("click", () => {
    if (validate()) {
      console.log("buy hei maiken yyyy");
      dialog.close();
    }
  });
});

window.addEventListener("focusout", (e) => {
  if (["input-name", "input-address", "input-email"].includes(e.target.id)) {
    updateProgressBar();
    validate(e.target.id);
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

  progressBar.ariaValueNow = progress+"";
  progressBar.style.width = (100 * progress) / 3 + "%";
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
  return !name ? "Name is required" : "";
}

function validateAddressInput(address) {
  return !address ? "Address is required" : "";
}

function validateEmailInput(email) {
  if (!email) {
    return "Email is required";
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "The email is not valid";
  }
  return "";
}

