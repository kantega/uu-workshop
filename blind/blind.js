window.addEventListener("click", function (e) {
  if (e.target.id === "blind-modal-overlay") {
    document.getElementById("blind-modal-overlay").style.display = "none";
  }
});

function showModal() {
  document.getElementById("blind-modal-overlay").style.display = "flex";
  document.getElementById("blind-input-name").focus();
}
