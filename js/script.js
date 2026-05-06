let buttons = document.querySelectorAll(".toggleBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let box = this.nextElementSibling;

    if (box.style.display === "block") {
      box.style.display = "none";
      this.textContent = "Show Purchase Options";
    } else {
      box.style.display = "block";
      this.textContent = "Hide Purchase Options";
    }
  });
});
