// Footer dynamic info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // Toggle between ☰ and X
  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});
