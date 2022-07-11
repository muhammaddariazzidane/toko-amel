const loading = document.querySelector(".loading");
const send = document.querySelector(".send");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("nav-blur", window.scrollY > 0);
});
const scriptURL = "https://script.google.com/macros/s/AKfycbyPEsiRFWrJJqtM2LFqEfJIwstOq4fMzRrxJfQBFgi9jmwrSIJ5HV-v7qj6vO5tbVTkMA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loading.classList.toggle("d-none");
  send.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Berhasil Terkirim",
        showConfirmButton: false,
        timer: 2000,
      });
      loading.classList.toggle("d-none");
      send.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
