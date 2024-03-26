const btnNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
