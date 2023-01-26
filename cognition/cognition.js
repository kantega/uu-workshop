let time = 10;
let timer = setInterval(calculate, 1000);

function calculate() {
  time--;
  if (time >= 0) {
    seconds = parseInt(time);

    document.getElementById("seconds").innerHTML = time;
  } else {
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("find-button").style.display = "block";
    clearInterval(timer);

    return;
  }
}

function findTickets() {
  document.getElementById("timer-frame").style.display = "flex";
  document.getElementById("find-button").style.display = "none";

  time = 10;
  timer = setInterval(calculate, 1000);
}

function containsNumbers(str) {
  return /\d/.test(str);
}

function validate() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;

  if (
    containsNumbers(name) ||
    containsNumbers(surname) ||
    name.length === 0 ||
    surname.length === 0
  ) {
    return false;
  } else {
    return true;
  }
}

function orderTickets() {
  if (validate()) {
    document.getElementById("error").style.display = "none";
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("success").style.display = "inline-block";
    document.getElementById("find-button").style.display = "none";
    clearInterval(timer);
  } else {
    document.getElementById("error").style.display = "block";
  }
}
