let time = 10;
let timer = setInterval(calculate, 1000);

function calculate() {
  time--;
  if (time <= 0) {
    clearInterval(timer);

    return;
  }
}

function findTickets() {
  document.getElementById("timer-frame").style.display = "flex";
  document.getElementById("find-button").style.display = "none";
}

function containsNumbers(str) {
  return /\d/.test(str);
}

function validate() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  if(time <= 0) {
    return [false, "Tiden er utløpt"]
  }

  if (
    containsNumbers(name) ||
    containsNumbers(surname) ||
    name.length === 0 ||
    surname.length === 0
  ) {
    return [false, "Du må fylle ut alle felter med riktig informasjon"];
  } else {
    return [true];
  }
}

function orderTickets() {
  const [validationResult, validationMessage] = validate()
  console.log(validationMessage, validationResult)
  if (!validationResult) {
    document.getElementById("error").innerHTML = validationMessage
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("success").style.display = "inline-block";
    document.getElementById("find-button").style.display = "none";
    clearInterval(timer);
  }
}
