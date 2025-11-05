
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  const lastModifiedSpan = document.getElementById("lastModified");


  yearSpan.textContent = new Date().getFullYear();

 
  const lastModified = new Date(document.lastModified);
  lastModifiedSpan.textContent = `Última modificación: ${lastModified.toLocaleString('es-EC')}`;
});
