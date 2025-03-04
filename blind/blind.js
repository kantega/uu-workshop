document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("rocket-dialog");
  const form = document.getElementById("form");

  document.getElementById("openDialog").addEventListener("click", () => {
      dialog.showModal();
  });
  document.getElementById("closeDialog").addEventListener("click", () => {
      dialog.close();
  });

  document.getElementById("buy").addEventListener("click", () => {
    if (validate()) {
      dialog.close();
    }
  });

  form.addEventListener("submit", (event) =>{
    dialog.close();
    document.getElementById("success").style.display = "block";
    event.preventDefault();
  });
});

window.addEventListener("focusout", (e) => {
  if (["input-name", "input-address", "input-email"].includes(e.target.id)) {
    updateProgressBar();
  }
});

function updateProgressBar() {
  let progressBar = document.getElementById("progress-bar");
  let nameInput = document.getElementById("input-name");
  let addressInput = document.getElementById("input-address");
  let emailInput = document.getElementById("input-email");
  let progress = 0;

  progress += emailInput.checkValidity() ? 1.0 : 0.0;
  progress += addressInput.checkValidity() ? 1.0 : 0.0;
  progress += nameInput.checkValidity() ? 1.0 : 0.0;

  progressBar.ariaValueNow = progress+"";
  progressBar.style.width = (100 * progress) / 3 + "%";
}

