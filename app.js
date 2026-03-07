const initialProducts = [
  // ========================
  // MEN'S PRODUCTS
  // ========================
  {
    id: crypto.randomUUID(),
    name: 'JCF Heartbreak Tee and Joggers Set',
    price: 115.0,
    colors: ['Black', 'Gray', 'White', 'Navy'],
    gender: 'men',
    image: 'assets/jogger_set.png',
    description: 'Slim fit joggers designed for comfort and athletic style.',
    category: 'bottoms',
    style: 'slim jogger',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Relaxed Joggers',
    price: 115.0,
    colors: ['Black', 'Gray', 'White', 'Olive'],
    gender: 'men',
    image: './assets/relaxed-joggers-black.jpg',
    description: 'Relaxed fit joggers for casual wear or lounging at home.',
    category: 'bottoms',
    style: 'relaxed jogger',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF V-Neck Tee',
    price: 55.0,
    colors: ['Black', 'Gray', 'White', 'Navy'],
    gender: 'men',
    image: './assets/vneck-tee-black.jpg',
    description: 'Soft V-neck tee made for layering or standalone style.',
    category: 'tops',
    style: 'v-neck tee',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Round-Neck Tee',
    price: 50.0,
    colors: ['Black', 'Gray', 'White', 'Olive'],
    gender: 'men',
    image: './assets/roundneck-tee-black.jpg',
    description: 'Classic round-neck tee crafted for everyday comfort.',
    category: 'tops',
    style: 'round-neck tee',
    featured: false,
  },

  // ========================
  // WOMEN'S PRODUCTS
  // ========================
  {
    id: crypto.randomUUID(),
    name: 'JCF Legging and Crop Set',
    price: 120.0,
    colors: ['Black', 'Gray', 'White', 'Navy', 'Pink'],
    gender: 'women',
    image: 'assets/leggings_set.png',
    description: 'Slim fit joggers designed to flatter and move with you.',
    category: 'bottoms',
    style: 'slim jogger',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Relaxed Joggers",
    price: 120.0,
    colors: ['Black', 'Gray', 'White', 'Olive', 'Pink'],
    gender: 'women',
    image: './assets/womens-relaxed-joggers-black.jpg',
    description: 'Relaxed fit joggers with side pockets, perfect for lounging.',
    category: 'bottoms',
    style: 'relaxed jogger',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Leggings with Side Pockets',
    price: 100.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/leggings-side-pockets-black.jpg',
    description: 'High-performance leggings with convenient side pockets.',
    category: 'bottoms',
    style: 'leggings',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Leggings with High Waist',
    price: 100.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/leggings-highwaist-black.jpg',
    description: 'High-waist leggings designed for style and comfort during workouts.',
    category: 'bottoms',
    style: 'leggings',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Crop Top",
    price: 55.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/crop-top-black.jpg',
    description: 'Stylish crop top designed for layering or standalone wear.',
    category: 'tops',
    style: 'crop top',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Long Crop Top",
    price: 55.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/long-crop-top-black.jpg',
    description: 'Longer crop top with a comfortable stretch for casual or athletic wear.',
    category: 'tops',
    style: 'crop top',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Yoga Shorts",
    price: 60.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/yoga-shorts-black.jpg',
    description: 'High-waist yoga shorts with side pockets for ultimate flexibility and style.',
    category: 'bottoms',
    style: 'yoga shorts',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Cropped Hoodie",
    price: 90.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/cropped-hoodie-black.jpg',
    description: 'Cropped hoodie designed for a trendy casual look.',
    category: 'tops',
    style: 'cropped hoodie',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Oversized Hoodie",
    price: 110.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: './assets/oversized-hoodie-black.jpg',
    description: 'Oversized hoodie for a relaxed and cozy vibe.',
    category: 'tops',
    style: 'oversized hoodie',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Slim Fit Hoodie",
    price: 100.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/jcf-evol-hoodie.png',
    description: 'Slim fit hoodie designed to accentuate your silhouette.',
    category: 'tops',
    style: 'slim hoodie',
    featured: true,
  },
];

function inferGender(product) {
  const name = String(product?.name || '').toLowerCase();
  if (name.includes('cropped hoodie')) return 'women';
  if (name.includes('hoodie')) return 'unisex';
  if (name.includes("women") || name.includes('legging') || name.includes('crop') || name.includes('yoga')) return 'women';
  return 'men';
}

function normalizeProducts(products) {
  if (!Array.isArray(products)) return initialProducts;

  return products
    .filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)))
    .map((product) => ({
      ...product,
      featured: product.featured === true,
      gender: product.gender || inferGender(product),
    }));
}

const state = {
  products: normalizeProducts(load('jcf_products', initialProducts)),
  cart: load('jcf_cart', []),
  customer: load('jcf_customer', null),
  adminAuth: false,
  checkoutStep: 1,
  selectedProductId: null,
  selectedColor: '',
  activeCatalogView: 'men-products',
};

const views = [...document.querySelectorAll('.view')];
const menProductGrid = document.getElementById('men-product-grid');
const womenProductGrid = document.getElementById('women-product-grid');
const unisexProductGrid = document.getElementById('unisex-product-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const menSearchInput = document.getElementById('search-men');
const womenSearchInput = document.getElementById('search-women');
const unisexSearchInput = document.getElementById('search-unisex');
const reviewSummary = document.getElementById('review-summary');
const adminProducts = document.getElementById('admin-products');
const detailName = document.getElementById('detail-name');
const detailPrice = document.getElementById('detail-price');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');
const detailAddButton = document.getElementById('detail-add-to-cart');
const detailColor = document.getElementById('detail-color');
const cartNavButton = document.querySelector('.cart-nav-btn');
const detailBackButton = document.getElementById('detail-back');
const featuredGrid = document.getElementById('featured-grid');
let productImageManifest = {};

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => setView(btn.dataset.view));
});

if (menSearchInput) menSearchInput.addEventListener('input', renderProducts);
if (womenSearchInput) womenSearchInput.addEventListener('input', renderProducts);
if (unisexSearchInput) unisexSearchInput.addEventListener('input', renderProducts);
if (detailBackButton) {
  detailBackButton.addEventListener('click', () => setView(state.activeCatalogView));
}
if (detailColor) {
  detailColor.addEventListener('change', () => {
    state.selectedColor = detailColor.value;
    renderProductDetail();
  });
}

function setView(id) {
  if (id === 'product-detail' && !state.selectedProductId) {
    id = state.activeCatalogView;
  }

  if (id === 'men-products' || id === 'women-products' || id === 'unisex-products') {
    state.activeCatalogView = id;
  }

  if (id === 'checkout' && !state.customer) {
    customerModal.showModal();
    return;
  }

  if (id === 'admin' && !state.adminAuth) {
    adminModal.showModal();
    return;
  }

  views.forEach((view) => view.classList.toggle('active', view.id === id));
}

function load(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function save() {
  localStorage.setItem('jcf_products', JSON.stringify(state.products));
  localStorage.setItem('jcf_cart', JSON.stringify(state.cart));
  localStorage.setItem('jcf_customer', JSON.stringify(state.customer));
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function getProductImageForColor(product, color) {
  const colors = productImageManifest?.[product.name];
  if (colors && colors[color]) return colors[color];
  return product.image;
}

function bindMagnifiers(scope = document) {
  const images = [...scope.querySelectorAll('img.magnify-image')];

  images.forEach((img) => {
    if (img.dataset.magnifierBound === 'true') return;

    const frame = img.closest('.magnifier-frame');
    if (!frame) return;

    const lens = document.createElement('div');
    lens.className = 'img-magnifier-lens';
    frame.appendChild(lens);

    const hideLens = () => {
      lens.style.display = 'none';
      frame.classList.remove('magnifier-active');
    };

    const moveLens = (event) => {
      const rect = img.getBoundingClientRect();
      const isTouch = event.type.startsWith('touch');
      const point = isTouch ? event.touches[0] : event;
      if (!point) return;

      let x = point.clientX - rect.left;
      let y = point.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        hideLens();
        return;
      }

      const src = img.currentSrc || img.src;
      if (!src) return;

      const zoom = Number(img.dataset.zoom) || 2.5;
      const lensWidth = lens.offsetWidth;
      const lensHeight = lens.offsetHeight;
      const minX = lensWidth / 2;
      const minY = lensHeight / 2;
      const maxX = rect.width - minX;
      const maxY = rect.height - minY;

      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));

      lens.style.display = 'block';
      frame.classList.add('magnifier-active');
      lens.style.left = `${x - minX}px`;
      lens.style.top = `${y - minY}px`;
      lens.style.backgroundImage = `url("${src}")`;
      lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      lens.style.backgroundPosition = `-${x * zoom - minX}px -${y * zoom - minY}px`;
    };

    img.addEventListener('mousemove', moveLens);
    img.addEventListener('mouseleave', hideLens);
    img.addEventListener('touchmove', moveLens, { passive: true });
    img.addEventListener('touchend', hideLens);

    img.dataset.magnifierBound = 'true';
  });
}

function getFilteredProducts(gender, query) {
  return state.products.filter((product) => {
    const matchesGender = product.gender === gender;
    const matchesQuery = product.name.toLowerCase().includes(query);
    return matchesGender && matchesQuery;
  });
}

function getFeaturedProducts() {
  const featured = state.products.filter((product) => product.featured === true);
  if (featured.length) return featured;
  const men = getFilteredProducts('men', '').slice(0, 2);
  const women = getFilteredProducts('women', '').slice(0, 2);
  return [...men, ...women];
}

function renderProductGrid(grid, products, sourceView) {
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (product) => `
      <article class="card">
        <div class="magnifier-frame">
          <img class="magnify-image" data-zoom="2.3" src="${product.image}" alt="${product.name}" onclick="openProduct('${product.id}', '${sourceView}')" />
        </div>
        <div class="card-content">
          <h3><button class="link-button" onclick="openProduct('${product.id}', '${sourceView}')">${product.name}</button></h3>
          <p><strong>${money(product.price)}</strong></p>
          <button class="secondary" onclick="openProduct('${product.id}', '${sourceView}')">View Item</button>
        </div>
      </article>
    `
    )
    .join('');

  bindMagnifiers(grid);
}

window.openCollection = (targetView) => {
  if (targetView !== 'men-products' && targetView !== 'women-products' && targetView !== 'unisex-products') return;
  state.activeCatalogView = targetView;
  setView(targetView);
};

function renderFeaturedProducts() {
  if (!featuredGrid) return;

  featuredGrid.innerHTML = getFeaturedProducts()
    .map(
      (product) => `
      <article class="card">
        <div class="magnifier-frame">
          <img class="magnify-image" data-zoom="2.3" src="${product.image}" alt="${product.name}" onclick="openCollection('${product.gender}-products')" />
        </div>
        <div class="card-content">
          <h3>${product.name}</h3>
          <p><strong>${money(product.price)}</strong></p>
          <button class="secondary" onclick="openCollection('${product.gender}-products')">Shop ${product.gender === 'men' ? "Men's" : "Women's"} Collection</button>
        </div>
      </article>
    `
    )
    .join('');

  bindMagnifiers(featuredGrid);
}

function renderProducts() {
  const menQuery = (menSearchInput?.value || '').toLowerCase().trim();
  const womenQuery = (womenSearchInput?.value || '').toLowerCase().trim();
  const unisexQuery = (unisexSearchInput?.value || '').toLowerCase().trim();
  renderProductGrid(menProductGrid, getFilteredProducts('men', menQuery), 'men-products');
  renderProductGrid(womenProductGrid, getFilteredProducts('women', womenQuery), 'women-products');
  renderProductGrid(unisexProductGrid, getFilteredProducts('unisex', unisexQuery), 'unisex-products');
  renderFeaturedProducts();
}

function renderProductDetail() {
  if (!detailName || !detailPrice || !detailImage || !detailDescription || !detailAddButton || !detailColor) return;

  const product = state.products.find((item) => item.id === state.selectedProductId);
  if (!product) return;

  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ['Black'];
  if (!colors.includes(state.selectedColor)) {
    state.selectedColor = colors[0];
  }

  detailColor.innerHTML = colors.map((color) => `<option value="${color}">${color}</option>`).join('');
  detailColor.value = state.selectedColor;

  detailName.textContent = product.name;
  detailPrice.textContent = money(product.price);
  detailImage.src = getProductImageForColor(product, state.selectedColor);
  detailImage.alt = product.name;
  detailDescription.textContent = `${product.name} is built for everyday comfort, movement, and clean street-ready style.`;
  detailAddButton.setAttribute('onclick', `addToCart('${product.id}')`);
  bindMagnifiers(document.getElementById('product-detail'));
}

window.openProduct = (productId, sourceView = 'men-products') => {
  state.activeCatalogView = sourceView;
  if (state.selectedProductId !== productId) state.selectedColor = '';
  state.selectedProductId = productId;
  renderProductDetail();
  setView('product-detail');
};

window.addToCart = (productId) => {
  const product = state.products.find((item) => item.id === productId);
  const color = state.selectedProductId === productId ? state.selectedColor || null : null;
  const line = state.cart.find((item) => item.id === productId && (item.color || null) === color);

  if (line) {
    line.qty += 1;
  } else {
    state.cart.push({ id: product.id, name: product.name, color, price: product.price, qty: 1 });
  }

  save();
  renderCart();
};

window.removeFromCart = (productId) => {
  state.cart = state.cart.filter((item) => item.id !== productId);
  save();
  renderCart();
};

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item) => `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong>
          ${item.color ? `<p>Color: ${item.color}</p>` : ''}
          <p>${money(item.price)} x ${item.qty}</p>
        </div>
        <button class="ghost" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `
      )
      .join('');
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = money(total);
  cartCount.textContent = itemCount;
  cartCount.classList.toggle('hidden', itemCount === 0);
  if (cartNavButton) {
    cartNavButton.setAttribute('aria-label', itemCount > 0 ? `Open cart with ${itemCount} item${itemCount > 1 ? 's' : ''}` : 'Open cart');
  }
}

function renderAdminProducts() {
  adminProducts.innerHTML = state.products
    .map(
      (item) => `
    <div class="admin-item">
      <div>
        <strong>${item.name}</strong>
        <p>${money(item.price)}</p>
      </div>
      <div class="row">
        <button class="secondary" onclick="editPrice('${item.id}')">Edit Price</button>
        <button class="ghost" onclick="deleteProduct('${item.id}')">Delete</button>
      </div>
    </div>
  `
    )
    .join('');
}

window.deleteProduct = (id) => {
  state.products = state.products.filter((item) => item.id !== id);
  state.cart = state.cart.filter((item) => item.id !== id);
  if (state.selectedProductId === id) {
    state.selectedProductId = null;
  }
  save();
  renderProducts();
  renderCart();
  renderAdminProducts();
  renderProductDetail();
};

window.editPrice = (id) => {
  const item = state.products.find((p) => p.id === id);
  const nextPrice = Number(prompt(`Set new price for ${item.name}`, item.price));

  if (!Number.isFinite(nextPrice) || nextPrice <= 0) return;

  item.price = nextPrice;
  state.cart = state.cart.map((line) => (line.id === id ? { ...line, price: nextPrice } : line));
  save();
  renderProducts();
  renderCart();
  renderAdminProducts();
  renderProductDetail();
};

const adminProductForm = document.getElementById('admin-product-form');
adminProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('admin-name').value.trim();
  const price = Number(document.getElementById('admin-price').value);
  const image = document.getElementById('admin-image').value.trim();

  state.products.unshift({ id: crypto.randomUUID(), name, price, image });
  adminProductForm.reset();
  save();
  renderProducts();
  renderAdminProducts();
});

const customerModal = document.getElementById('customer-login-modal');
const adminModal = document.getElementById('admin-login-modal');
const brandLogo = document.querySelector('.brand-logo');
const adminToggle = document.getElementById('admin-toggle');
let adminLogoClicks = 0;
let adminRevealTimer = null;

document.getElementById('login-toggle').addEventListener('click', () => customerModal.showModal());
adminToggle.addEventListener('click', () => adminModal.showModal());

if (brandLogo) {
  brandLogo.addEventListener('click', () => {
    adminLogoClicks += 1;
    clearTimeout(adminRevealTimer);
    adminRevealTimer = setTimeout(() => {
      adminLogoClicks = 0;
    }, 2200);

    if (adminLogoClicks >= 5) {
      adminLogoClicks = 0;
      clearTimeout(adminRevealTimer);
      adminToggle.click();
    }
  });
}

document.getElementById('customer-login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('customer-email').value.trim();
  const password = document.getElementById('customer-password').value.trim();

  if (!email || !password) return;

  state.customer = { email };
  save();
  customerModal.close();
  alert(`Welcome ${email}`);
});

document.getElementById('admin-login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('admin-email').value.trim();
  const password = document.getElementById('admin-password').value.trim();

  if (email === 'admin@jcf.com' && password === 'admin123') {
    state.adminAuth = true;
    adminModal.close();
    setView('admin');
  } else {
    alert('Invalid admin credentials');
  }
});

const checkoutForm = document.getElementById('checkout-form');
const panels = [...document.querySelectorAll('.checkout-panel')];
const steps = [...document.querySelectorAll('.step')];

function setCheckoutStep(step) {
  state.checkoutStep = step;
  panels.forEach((panel) => panel.classList.toggle('hidden', Number(panel.dataset.panel) !== step));
  steps.forEach((chip) => chip.classList.toggle('active', Number(chip.dataset.step) === step));

  if (step === 3) {
    const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    reviewSummary.innerHTML = `
      <h3>Order Summary</h3>
      ${state.cart.map((item) => `<p>${item.name} x ${item.qty} — ${money(item.price * item.qty)}</p>`).join('')}
      <p><strong>Total: ${money(total)}</strong></p>
    `;
  }
}

document.querySelectorAll('.next-step').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (state.checkoutStep < 3) setCheckoutStep(state.checkoutStep + 1);
  });
});

document.querySelectorAll('.prev-step').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (state.checkoutStep > 1) setCheckoutStep(state.checkoutStep - 1);
  });
});

document.getElementById('start-checkout').addEventListener('click', () => {
  if (!state.cart.length) {
    alert('Add items to your cart first.');
    return;
  }

  if (!state.customer) {
    customerModal.showModal();
    return;
  }

  setCheckoutStep(1);
  setView('checkout');
});

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Order placed successfully.');
  state.cart = [];
  setCheckoutStep(1);
  save();
  renderCart();
  setView(state.activeCatalogView);
});

renderProducts();
renderCart();
renderAdminProducts();
renderProductDetail();

fetch('assets/product-image-manifest.json')
  .then((response) => (response.ok ? response.json() : {}))
  .then((data) => {
    productImageManifest = data || {};
    renderProducts();
    renderProductDetail();
  })
  .catch(() => {});
