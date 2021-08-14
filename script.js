let hamMenu = document.querySelector(".hamburger-menu");
let navUl = document.querySelector(".nav-ul");
hamMenu.addEventListener("click", toggleHamMenu);

function toggleHamMenu() {
  //   if (navUl.classList.contains("show")) {
  //     navUl.classList.remove("show");
  //     navUl.classList.add("hide");
  //   } else {
  //     navUl.classList.remove("hide");
  //     navUl.classList.add("show");
  //   }
  navUl.classList.toggle("show");
}
