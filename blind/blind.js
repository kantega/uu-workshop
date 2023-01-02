window.addEventListener("click", function (e) {
	if (e.target.id === "blind-modal-overlay") {
		hideModal();
	}
});

function buy() {
	if (validate()) {
		hideModal();
	}
}

function showModal() {
	document.getElementById("blind-modal-overlay").style.display = "flex";
	document.getElementById("blind-input-name").focus();
}

function hideModal() {
	document.getElementById("blind-modal-overlay").style.display = "none";
}

function validate() {
	let nameInput = document.getElementById("blind-input-name");
	let addressInput = document.getElementById("blind-input-address");
	let emailInput = document.getElementById("blind-input-email");

	if (!validateNameInput(nameInput.value)) {
		return false;
	}
	if (!validateAddressInput(addressInput.value)) {
		return false;
	}
	if (!validateEmailInput(emailInput.value)) {
		return false;
	}
	return true;
}

function validateNameInput(name) {
	let validationErrorElem = document.getElementById("blind-validation-error-name");
	if (!name) {
		validationErrorElem.innerText = "Navn er påkrevd";
		return false;
	}
	return true;
}

function validateAddressInput(address) {
	let validationErrorElem = document.getElementById("blind-validation-error-address");
	if (!address) {
		validationErrorElem.innerText = "Addresse er påkrevd";
		return false;
	}
	return true;
}

function validateEmailInput(email) {
	let validationErrorElem = document.getElementById("blind-validation-error-email");
	if (!email) {
		validationErrorElem.innerText = "Epost er påkrevd";
		return false;
	}
	if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		validationErrorElem.innerText = "Eposten er ikkje gyldig";
		return false;
	}
	return true;
}
