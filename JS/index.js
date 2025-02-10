const hidden = document.getElementById("hidden-text");
const readMore = document.getElementById("readMore");
const navbarTogler = document.getElementById("navbar-toggler");

readMore.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
  document.querySelector(".fade-text").classList.toggle("show");
});

navbarTogler.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("transform");
  document.querySelectorAll("li").forEach((list) => {
    list.addEventListener("click", () => {
      document.querySelector("ul").classList.remove("transform");
    });
  });
});
