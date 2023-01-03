window.addEventListener("change", function (e) {
	if (e.target.id === "signup-email-input") {
		let emailButton = document.getElementById("signup-submit");
		emailButton.disabled = !validateEmailInput(e.target.value);
	}
});
window.addEventListener("click", function (e) {
	if (e.target.id === "signup-submit") {
		let emailInput = document.getElementById("signup-email-input");
		emailInput.value = "";
		e.target.disabled = true;
	}
});

function validateEmailInput(email) {
	if (!email) {
		return false;
	}
	if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		return false;
	}
	return true;
}
