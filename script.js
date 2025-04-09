// Toggle mobile menu

const tog = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

tog.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});