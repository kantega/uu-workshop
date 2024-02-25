function toggleReadMore() {
  const element = document.getElementById("person");
  const button = document.getElementById("read-more-button");

  if (element.classList.contains("person-read-more")) {
    element.classList.remove("person-read-more");
    button.innerHTML = "Read more";
  } else {
    element.classList.add("person-read-more");
    button.innerHTML = "Read less";
  }
}

function showHideGebyrgrunnlag(id) {
  const element = document.getElementById("bygning-gebyrgrunnlag-" + id);
  if (element.getAttribute("hidden") == null) {
    element.setAttribute("hidden", "hidden");
    document.getElementById("vis-gebyr-knapp-" + id).innerHTML =
      "Legg til gebyr";
  } else {
    element.removeAttribute("hidden");
    document.getElementById("vis-gebyr-knapp-" + id).innerHTML =
      "Skjul gebyrer";
  }
}
