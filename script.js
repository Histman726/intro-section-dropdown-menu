const checkboxMenu = document.querySelector("input.nav-menu-check");
const menu = document.querySelector(".menu");
let hijos = menu.querySelectorAll("*");
let hijosMenu = menu.querySelectorAll(".nav-menu, .nav-menu>*");

checkboxMenu.addEventListener("change", () => {
  if (checkboxMenu.checked) {
    menu.style.height = "0px";
    menu.style.padding = "0px";
  } else {
    menu.style.height = "384px";
    menu.style.padding = "5px 20px";
  }
});
