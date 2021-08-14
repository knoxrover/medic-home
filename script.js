let hamMenu = document.querySelector(".hamburger-menu");
let navUl = document.querySelector(".nav-ul");
hamMenu.addEventListener("click", toggleHamMenu);

function toggleHamMenu() {
  navUl.classList.toggle("show");
  navUl.classList.toggle("hide");
}
