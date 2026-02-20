const initialProducts = [
  {
    id: crypto.randomUUID(),
    name: 'JCF Air Motion Runner',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Street Pro Hoodie',
    price: 89.0,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: crypto.randomUUID(),
    name: 'JCF Court Legacy Tee',
    price: 45.5,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
];

const state = {
  products: load('jcf_products', initialProducts),
  cart: load('jcf_cart', []),
  customer: load('jcf_customer', null),
  adminAuth: false,
  checkoutStep: 1,
};

const views = [...document.querySelectorAll('.view')];
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search');
const reviewSummary = document.getElementById('review-summary');
const adminProducts = document.getElementById('admin-products');

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => setView(btn.dataset.view));
});

searchInput.addEventListener('input', renderProducts);

function setView(id) {
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

function renderProducts() {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = state.products.filter((p) => p.name.toLowerCase().includes(q));

  productGrid.innerHTML = filtered
    .map(
      (product) => `
      <article class="card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="card-content">
          <h3>${product.name}</h3>
          <p><strong>${money(product.price)}</strong></p>
          <button class="primary" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
      </article>
    `
    )
    .join('');
}

window.addToCart = (productId) => {
  const product = state.products.find((item) => item.id === productId);
  const line = state.cart.find((item) => item.id === productId);

  if (line) {
    line.qty += 1;
  } else {
    state.cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
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
          <p>${money(item.price)} x ${item.qty}</p>
        </div>
        <button class="ghost" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `
      )
      .join('');
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = money(total);
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
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
  save();
  renderProducts();
  renderCart();
  renderAdminProducts();
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

document.getElementById('login-toggle').addEventListener('click', () => customerModal.showModal());
document.getElementById('admin-toggle').addEventListener('click', () => adminModal.showModal());

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
  setView('products');
});

renderProducts();
renderCart();
renderAdminProducts();
