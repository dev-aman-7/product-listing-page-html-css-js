import { API_URL, uniqueCategories } from "./config.js";

const pageSize = 12;
let products = [];

const productGrid = document.getElementById("product-grid");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
// const filterRef = document.getElementById("filter-grid");

const params = new URLSearchParams(window.location.search);
let currentPage = parseInt(params.get("page")) || 1;
let currentCategory = params.get("category") || "all";

export async function fetchProducts(category = "all", page = 1) {
  try {
    const response = await fetch(API_URL.productlist, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categories_id: uniqueCategories[category] || "all",
      }),
    });

    const data = await response.json();
    console.log(data.data);
    if (data.status === "success") {
      products = data.data;
      handlePagination(page);
    } else {
      throw new Error("Invalid response status");
    }
  } catch (error) {
    productGrid.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    console.error("Fetch error:", error);
  }
}

function handlePagination(currentPage) {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  renderProducts(products.slice(start, end));
}

function renderProducts(products) {
  if (products.length === 0) {
    productGrid.innerHTML = `<div class="no-products"><p class="no-products-text">No products found</p></div>`;
    return;
  }
  productGrid.innerHTML = products
    .map((product) => {
      const discountBadge = product.product_discount
        ? `<span class="discount-badge">${product.product_discount}% OFF</span>`
        : "";
      const brandBadge = product.product_brand_name
        ? `<span class="fit-badge">${product.product_brand_name}</span>`
        : "";

      return `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.product_main_color_img1}" alt="${product.product_name}" loading="lazy"/>
          ${discountBadge}
          ${brandBadge}
        </div>
        <div class="product-info">
          <h3>${product.product_name}</h3>
          <div class="price">
            <span class="selling-price">₹${product.product_selling_price}</span>
            <span class="mrp">₹${product.product_mrp}</span>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
}

nextBtn?.addEventListener("click", () => {
  currentPage++;
  handlePagination(currentPage);
  const newParams = new URLSearchParams(params);
  newParams.set("page", currentPage);
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${newParams.toString()}`
  );
});

prevBtn?.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    handlePagination(currentPage);
    const newParams = new URLSearchParams(params);
    newParams.set("page", currentPage);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${newParams.toString()}`
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts(currentCategory, currentPage);
});
