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

