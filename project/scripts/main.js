//Mobile menu toggle 
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
if (navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        
    });
}

//Dynamic footer year
const yearSpan= document.querySelector("#current-year");
if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}


// CARRUSEL RESPONSIVE (main.js)


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel");
  const viewport = document.querySelector(".carousel-viewport");
  const slides = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  if (!track || slides.length === 0) return;

  let index = 0;
  let slideWidth = viewport.clientWidth;

  function updateSlideWidth() {
    slideWidth = viewport.clientWidth;
    
    track.style.transform = `translateX(${-index * slideWidth}px)`;
  }


  updateSlideWidth();


  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    });
  }

 
  let startX = 0;
  let isDragging = false;
  track.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX;
    track.style.transition = "none";
  });
  window.addEventListener("pointerup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "";
    const diff = e.clientX - startX;
    if (Math.abs(diff) > slideWidth * 0.2) {
      if (diff < 0) index = Math.min(index + 1, slides.length - 1);
      else index = Math.max(index - 1, 0);
    }
    track.style.transform = `translateX(${-index * slideWidth}px)`;
  });

  
  window.addEventListener("resize", () => {
    updateSlideWidth();
  });

  
});

