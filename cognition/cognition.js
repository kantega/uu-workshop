document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", orderTickets);
});

let time = 15;
let timer = setInterval(calculate, 1000);

function calculate() {
  time--;
  if (time >= 0) {
    seconds = parseInt(time);

    document.getElementById("seconds").innerHTML = time;
  } else {
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("find-button").style.display = "block";
    document.getElementById("seconds").innerHTML = 15;
    clearInterval(timer);

    return;
  }
}

function findTickets() {
  document.getElementById("timer-frame").style.display = "flex";
  document.getElementById("find-button").style.display = "none";

  time = 15;
  timer = setInterval(calculate, 1000);
}

function containsNumbers(str) {
  return /\d/.test(str);
}

function orderTickets(event) {
  event.preventDefault();
  console.log("Ordering tickets...");
  document.getElementById("timer-frame").style.display = "none";
  document.getElementById("success").style.display = "inline-block";
  document.getElementById("find-button").style.display = "none";
  clearInterval(timer);
}

function extendTime() {
  time = 15 * 10;
  document.getElementById("seconds").innerHTML = time;
}






