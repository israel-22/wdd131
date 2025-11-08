
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});
