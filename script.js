document.addEventListener("DOMContentLoaded", function () {
  console.log("El portafolio está listo");

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
    form.reset();
  });
});
