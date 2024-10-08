let btn = document.querySelector(".menu__btn");
let menu = document.querySelector(".menu__list");
let close = document.querySelector(".menu__close");
btn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  close.classList.toggle("menu__close--active");
  btn.classList.toggle("menu__btn--active");
});
close.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  close.classList.toggle("menu__close--active");
  btn.classList.toggle("menu__btn--active");
});
