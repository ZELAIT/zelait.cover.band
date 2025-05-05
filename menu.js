const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== toggle) {
    menu.classList.remove("active");
  }
});
