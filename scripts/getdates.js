const yearSpan = document.getElementById('currentYear');
const lastModifiedSpan = document.getElementById('lastModified');


yearSpan.textContent = new Date().getFullYear();


const lastModifiedDate = new Date(document.lastModified);
lastModifiedSpan.textContent = `Última modificación: ${lastModifiedDate.toLocaleString('es-EC')}`;
