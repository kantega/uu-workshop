window.addEventListener("click", function (e) {
	if (e.target.id === "modal-overlay") {
		hideModal();
	}
	if (e.target.id === "screen-reader-header") {
		toggleHideable(".screen-readers");
	}
	if (e.target.id === "how-to-test-header") {
		toggleHideable(".how-to-test");
	}
});

function buy() {
	if (validate()) {
		hideModal();
	}
}

function showModal() {
	document.getElementById("modal-overlay").style.display = "flex";
	document.getElementById("input-name").focus();
}

function hideModal() {
	document.getElementById("modal-overlay").style.display = "none";
}

function toggleHideable(hideableClass) {
	document.querySelector(hideableClass).classList.toggle("hidden");
}

function validate() {
	let nameInput = document.getElementById("input-name");
	let addressInput = document.getElementById("input-address");
	let emailInput = document.getElementById("input-email");

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
	let validationErrorElem = document.getElementById("validation-error-name");
	if (!name) {
		validationErrorElem.innerText = "Navn er påkrevd";
		validationErrorElem.style.display = "block"
		return false;
	}
	return true;
}

function validateAddressInput(address) {
	let validationErrorElem = document.getElementById("validation-error-address");
	if (!address) {
		validationErrorElem.innerText = "Addresse er påkrevd";
		validationErrorElem.style.display = "block"
		return false;
	}
	return true;
}

function validateEmailInput(email) {
	let validationErrorElem = document.getElementById("validation-error-email");
	if (!email) {
		validationErrorElem.innerText = "Epost er påkrevd";
		validationErrorElem.style.display = "block"
		return false;
	}
	if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		validationErrorElem.innerText = "Eposten er ikkje gyldig";
		validationErrorElem.style.display = "block"
		return false;
	}
	return true;
}
