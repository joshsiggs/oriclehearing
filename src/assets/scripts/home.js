console.log("Home page script loaded");

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

document.getElementById("menu-button")?.addEventListener("click", toggleMenu);