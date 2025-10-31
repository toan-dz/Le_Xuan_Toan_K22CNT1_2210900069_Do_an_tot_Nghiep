async function loadProducts() {
  const res = await fetch("data/products.json");
  const data = await res.json();

  renderProducts(data.livingRoom, "livingRoom");
  renderProducts(data.kitchen, "kitchen");
  renderProducts(data.bedroom, "bedroom");
}

function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="rating">★★★★★</div>
        <div class="old-price">${p.oldPrice.toLocaleString()} VND</div>
        <div class="price">${p.price.toLocaleString()} VND</div>
      </div>
    </div>
  `).join("");
}

loadProducts();
