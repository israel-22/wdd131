// scripts/recipes.js
import { loadJSON, createElement } from "./utils.js";

const recipeContainer = document.querySelector("#recipe-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.querySelector("#recipe-modal");
const modalContent = document.querySelector("#modal-content");
const closeModalBtn = document.querySelector("#close-modal");

let recipesData = []; // will hold array of recipe objects

// Load recipes from JSON
async function initRecipes() {
  const data = await loadJSON("./data/ecuador-food.json");
  if (!data) {
    console.error("No data loaded from JSON.");
    showNoRecipesMessage();
    return;
  }

  // Support both formats:
  // 1) { "recipes": [ ... ] }  OR  2) [ {...}, {...} ]
  if (Array.isArray(data)) {
    recipesData = data;
  } else if (Array.isArray(data.recipes)) {
    recipesData = data.recipes;
  } else {
    console.error("JSON structure not recognized:", data);
    showNoRecipesMessage();
    return;
  }

  displayRecipes(recipesData);
  attachFilterListeners();
}

function showNoRecipesMessage() {
  if (!recipeContainer) return;
  recipeContainer.innerHTML = `<p class="center">No recipes available.</p>`;
}

function displayRecipes(recipes) {
  if (!recipeContainer) {
    console.error("Recipe container not found in DOM.");
    return;
  }

  recipeContainer.innerHTML = "";

  if (!recipes || recipes.length === 0) {
    showNoRecipesMessage();
    return;
  }

  recipes.forEach(recipe => {
    const card = createElement("article", ["recipe-card"]);

    const img = document.createElement("img");
    img.src = recipe.image || "images/placeholder.jpg";
    img.alt = recipe.name || "Recipe image";
    img.loading = "lazy";

    const body = createElement("div", ["recipe-card-body"]);
    const title = createElement("h3");
    title.textContent = recipe.name || "Untitled";

    const category = createElement("p", ["category-tag"]);
    category.textContent = recipe.category || "";

    body.appendChild(title);
    body.appendChild(category);

    card.appendChild(img);
    card.appendChild(body);

    // click to open modal with details
    card.addEventListener("click", () => showRecipeDetails(recipe));

    recipeContainer.appendChild(card);
  });
}

function attachFilterListeners() {
  if (!filterButtons || filterButtons.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      if (category === "all") {
        displayRecipes(recipesData);
      } else {
        const filtered = recipesData.filter(r => r.category === category);
        displayRecipes(filtered);
      }
    });
  });
}

function showRecipeDetails(recipe) {
  if (!modal || !modalContent) return;

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");

  modalContent.innerHTML = `
    <div class="detail">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image || 'images/placeholder.jpg'}" alt="${recipe.name}">
      <h3>Ingredients</h3>
      <ul>${(recipe.ingredients || []).map(i => `<li>${i}</li>`).join("")}</ul>

      <h3>Instructions</h3>
      <ol>${(recipe.steps || []).map(s => `<li>${s}</li>`).join("")}</ol>
    </div>
  `;
}

// Close modal (defensive)
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  });
}

// also close modal when clicking outside content
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  });
}

// Initialize
initRecipes();
