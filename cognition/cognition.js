let time = 60;

timer = setInterval(calculate, 1000);

function calculate() {
  time--;
  if (time >= 0) {
    seconds = parseInt(time);

    document.getElementById("seconds").innerHTML = time;
  } else {
    return;
  }
}
