const items = document.querySelectorAll(".items-plus");
const openMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const container = document.querySelector(".container");
console.log(container);

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  container.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  container.classList.remove("open");
});
