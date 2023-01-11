window.addEventListener("click", function (e) {
	if (e.target.id === "signup-submit") {
		let emailInput = document.getElementById("signup-email-input");
		let emailError = document.getElementById("signup-email-error");
		if(validateEmailInput(emailInput.value)){
			emailInput.value = "";
			emailError.innerText = "";
		}
		else {
			emailError.innerText = "Eposten er ikkje gyldig"
		}
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
