/* Menu */
const menu = document.querySelector("#menu");
const menuLinks = document.querySelector(".menu-links");
const links = document.querySelectorAll(".menu-links li");

menu.addEventListener("click", () => {
  console.log("sda")
  menu.classList.toggle("open");
  menuLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});