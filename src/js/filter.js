import { fetchProducts } from "./app.js";

const params = new URLSearchParams(window.location.search);
let category = params.get("category") || "all";
let page = parseInt(params.get("page")) || 1;

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".filter-card");

  updateActiveCard(category);

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      category = card.getAttribute("data-category");
      page = 1;
      updateActiveCard(category);
      params.set("category", category);
      params.set("page", page);
      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );

      fetchProducts(category, 1);
    });
  });
});

function updateActiveCard(selectedCategory) {
  document.querySelectorAll(".filter-card").forEach((card) => {
    const isActive = card.getAttribute("data-category") === selectedCategory;
    card.classList.toggle("active", isActive);
  });
}
