import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');
const legacyDataFile = path.join(dataDir, 'db.json');
const productsFile = path.join(dataDir, 'products.json');
const usersFile = path.join(dataDir, 'users.json');
const systemFile = path.join(dataDir, 'system.json');
const adminHashIterations = Number(process.env.ADMIN_HASH_ITERATIONS || 210000);
const adminHashKeylen = 64;
const adminHashDigest = 'sha512';
const defaultAdminEmail = String(process.env.ADMIN_EMAIL || 'admin@jcf.com').trim().toLowerCase();
const bootstrapAdminPassword = String(process.env.ADMIN_PASSWORD || 'change-me-now');

const initialProducts = [
  // ========================
  // MEN'S PRODUCTS
  // ========================
  {
    id: crypto.randomUUID(),
    name: "JCF Jogger Set",
    price: 125.0,
    colors: ['Black', 'Gray', 'White', 'Navy'],
    gender: 'men',
    image: 'assets/jogger_set.png',
    description: 'Athletic jogger and tee set designed for comfort and street style.',
    category: 'sets',
    style: 'jogger set',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Slim Jogger",
    price: 95.0,
    colors: ['Black', 'Gray', 'White', 'Olive'],
    gender: 'men',
    image: 'assets/slim-jogger.jpg',
    description: 'Slim fit joggers built for movement and everyday wear.',
    category: 'bottoms',
    style: 'slim jogger',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Crew Neck Long Sleeve",
    price: 35.0,
    colors: ['Black', 'Gray', 'White', 'Navy'],
    gender: 'men',
    image: 'assets/crew-neck-long-sleeve.jpg',
    description: 'Comfortable long sleeve tee designed for layering.',
    category: 'tops',
    style: 'long sleeve',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Tech Hoodie",
    price: 85.0,
    colors: ['Black', 'Gray', 'White'],
    gender: 'men',
    image: 'assets/tech-hoodie.jpg',
    description: 'Tech hoodie with hidden pockets and athletic structure.',
    category: 'tops',
    style: 'hoodie',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Crew Neck Tee",
    price: 50.0,
    colors: ['Black', 'Gray', 'White', 'Olive'],
    gender: 'men',
    image: 'assets/crew-neck-tee.jpg',
    description: 'Classic crew neck tee made for everyday casual wear.',
    category: 'tops',
    style: 't-shirt',
    featured: false,
  },

  // ========================
  // WOMEN'S PRODUCTS
  // ========================
  {
    id: crypto.randomUUID(),
    name: "JCF Legging Crop Set",
    price: 120.0,
    colors: ['Black', 'Gray', 'White', 'Navy', 'Pink'],
    gender: 'women',
    image: 'assets/leggings_set.png',
    description: 'Leggings and crop top set built for performance and style.',
    category: 'sets',
    style: 'legging set',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Relaxed Joggers",
    price: 120.0,
    colors: ['Black', 'Gray', 'White', 'Olive', 'Pink'],
    gender: 'women',
    image: 'assets/relaxed-joggers.jpg',
    description: 'Relaxed joggers with side pockets for comfort and lounge wear.',
    category: 'bottoms',
    style: 'joggers',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Crop Top Short Set",
    price: 95.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/crop-top-short-set.jpg',
    description: 'Crop top and biker short set designed for workouts.',
    category: 'sets',
    style: 'short set',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Leggings Crop Set",
    price: 100.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/leggings-crop.jpg',
    description: 'High waist leggings paired with crop top for training.',
    category: 'sets',
    style: 'leggings',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Crop Jogger Set",
    price: 110.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/crop-top-jogger-set.jpg',
    description: 'Crop hoodie and jogger set for casual style.',
    category: 'sets',
    style: 'jogger set',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Long Sleeve Crop",
    price: 55.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/long-sleeve-crop.jpg',
    description: 'Long sleeve crop top built for style and comfort.',
    category: 'tops',
    style: 'crop top',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Crop Hoodie",
    price: 90.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/crop-top-hoodie.jpg',
    description: 'Trendy cropped hoodie for casual wear.',
    category: 'tops',
    style: 'cropped hoodie',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Back Hoodie",
    price: 110.0,
    colors: ['Black', 'Gray', 'White', 'Pink'],
    gender: 'women',
    image: 'assets/back-hoodie.jpg',
    description: 'Oversized hoodie designed for cozy comfort.',
    category: 'tops',
    style: 'oversized hoodie',
    featured: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Evol Hoodie",
    price: 100.0,
    colors: ['Black', 'Gray', 'White'],
    gender: 'men',
    image: 'assets/jcf-evol-hoodie.png',
    description: 'Slim fit hoodie with a modern athletic cut.',
    category: 'tops',
    style: 'hoodie',
    featured: true,
  },
];

const initialUsersData = {
  customers: [],
  authCodes: {},
  orders: [],
  pendingCheckouts: []
};

const initialSystemData = {
  emailSignups: [],
  supportMessages: [],
  promoCodes: {
    'jcf-fall': { code: 'jcf-fall', discountRate: 0.2, active: true }
  }
};

function hashAdminPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const normalizedPassword = String(password || '');
  const passwordHash = crypto
    .pbkdf2Sync(normalizedPassword, salt, adminHashIterations, adminHashKeylen, adminHashDigest)
    .toString('hex');
  return {
    passwordHash,
    passwordSalt: salt,
    passwordIterations: adminHashIterations,
    passwordDigest: adminHashDigest
  };
}

function verifyAdminPassword(password, admin = {}) {
  const salt = String(admin.passwordSalt || '');
  const expectedHash = String(admin.passwordHash || '');
  const iterations = Number(admin.passwordIterations || adminHashIterations);
  const digest = String(admin.passwordDigest || adminHashDigest);
  if (!salt || !expectedHash || !Number.isFinite(iterations) || iterations <= 0) return false;

  const actualHash = crypto
    .pbkdf2Sync(String(password || ''), salt, iterations, adminHashKeylen, digest)
    .toString('hex');
  if (actualHash.length !== expectedHash.length) return false;
  return crypto.timingSafeEqual(Buffer.from(actualHash, 'hex'), Buffer.from(expectedHash, 'hex'));
}

function normalizeAdminRecord(input = {}) {
  const admin = input && typeof input === 'object' ? input : {};
  const email = String(admin.email || defaultAdminEmail).trim().toLowerCase() || defaultAdminEmail;
  const envPassword = String(process.env.ADMIN_PASSWORD || '').trim();
  const envEmail = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase();

  if (envPassword) {
    const stableSalt = String(admin.passwordSalt || '').trim() || crypto.randomBytes(16).toString('hex');
    return {
      email: envEmail || email,
      ...hashAdminPassword(envPassword, stableSalt)
    };
  }

  if (admin.passwordHash && admin.passwordSalt) {
    return {
      email: envEmail || email,
      passwordHash: String(admin.passwordHash),
      passwordSalt: String(admin.passwordSalt),
      passwordIterations: Number(admin.passwordIterations || adminHashIterations),
      passwordDigest: String(admin.passwordDigest || adminHashDigest)
    };
  }

  const legacyPassword = String(admin.password || '').trim();
  const seedPassword = legacyPassword || bootstrapAdminPassword;
  return {
    email,
    ...hashAdminPassword(seedPassword)
  };
}

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });

  let legacy = null;
  try {
    const raw = await fs.readFile(legacyDataFile, 'utf8');
    legacy = JSON.parse(raw);
  } catch {
    legacy = null;
  }

  const ensureJsonFile = async (filePath, fallback) => {
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify(fallback, null, 2), 'utf8');
    }
  };

  await ensureJsonFile(productsFile, Array.isArray(legacy?.products) ? legacy.products : initialProducts);
  await ensureJsonFile(
    usersFile,
    {
      customers: Array.isArray(legacy?.customers) ? legacy.customers : initialUsersData.customers,
      authCodes:
        legacy?.authCodes && typeof legacy.authCodes === 'object' && !Array.isArray(legacy.authCodes)
          ? legacy.authCodes
          : initialUsersData.authCodes,
      orders: Array.isArray(legacy?.orders) ? legacy.orders : initialUsersData.orders,
      pendingCheckouts: Array.isArray(legacy?.pendingCheckouts) ? legacy.pendingCheckouts : initialUsersData.pendingCheckouts
    }
  );
  await ensureJsonFile(
    systemFile,
    {
      emailSignups: Array.isArray(legacy?.emailSignups) ? legacy.emailSignups : initialSystemData.emailSignups,
      supportMessages: Array.isArray(legacy?.supportMessages) ? legacy.supportMessages : initialSystemData.supportMessages,
      promoCodes:
        legacy?.promoCodes && typeof legacy.promoCodes === 'object' && !Array.isArray(legacy.promoCodes)
          ? legacy.promoCodes
          : initialSystemData.promoCodes,
      admin: normalizeAdminRecord(legacy?.admin)
    }
  );

  try {
    const raw = await fs.readFile(systemFile, 'utf8');
    const parsed = JSON.parse(raw);
    const normalizedAdmin = normalizeAdminRecord(parsed?.admin);
    const hasPlainPassword = Boolean(parsed?.admin && typeof parsed.admin === 'object' && parsed.admin.password);
    const sameHash = String(parsed?.admin?.passwordHash || '') === normalizedAdmin.passwordHash;
    const sameSalt = String(parsed?.admin?.passwordSalt || '') === normalizedAdmin.passwordSalt;
    if (hasPlainPassword || !sameHash || !sameSalt) {
      const next = {
        ...parsed,
        emailSignups: Array.isArray(parsed?.emailSignups) ? parsed.emailSignups : [],
        supportMessages: Array.isArray(parsed?.supportMessages) ? parsed.supportMessages : [],
        promoCodes:
          parsed?.promoCodes && typeof parsed.promoCodes === 'object' && !Array.isArray(parsed.promoCodes)
            ? parsed.promoCodes
            : initialSystemData.promoCodes,
        admin: normalizedAdmin
      };
      await fs.writeFile(systemFile, JSON.stringify(next, null, 2), 'utf8');
    }
  } catch {
    // If migration fails, readStore will still rebuild from safe defaults.
  }
}

async function readStore() {
  await ensureStore();
  const [productsRaw, usersRaw, systemRaw] = await Promise.all([
    fs.readFile(productsFile, 'utf8'),
    fs.readFile(usersFile, 'utf8'),
    fs.readFile(systemFile, 'utf8')
  ]);

  const productsParsed = JSON.parse(productsRaw);
  const usersParsed = JSON.parse(usersRaw);
  const systemParsed = JSON.parse(systemRaw);

  return {
    products: Array.isArray(productsParsed) ? productsParsed : initialProducts,
    emailSignups: Array.isArray(systemParsed?.emailSignups) ? systemParsed.emailSignups : [],
    supportMessages: Array.isArray(systemParsed?.supportMessages) ? systemParsed.supportMessages : [],
    customers: Array.isArray(usersParsed?.customers) ? usersParsed.customers : [],
    orders: Array.isArray(usersParsed?.orders) ? usersParsed.orders : [],
    pendingCheckouts: Array.isArray(usersParsed?.pendingCheckouts) ? usersParsed.pendingCheckouts : [],
    authCodes:
      usersParsed?.authCodes && typeof usersParsed.authCodes === 'object' && !Array.isArray(usersParsed.authCodes)
        ? usersParsed.authCodes
        : {},
    promoCodes:
      systemParsed?.promoCodes && typeof systemParsed.promoCodes === 'object' && !Array.isArray(systemParsed.promoCodes)
        ? systemParsed.promoCodes
        : initialSystemData.promoCodes,
    admin: normalizeAdminRecord(systemParsed?.admin)
  };
}

async function writeStore(next) {
  await ensureStore();
  await Promise.all([
    fs.writeFile(productsFile, JSON.stringify(next.products || [], null, 2), 'utf8'),
    fs.writeFile(
      usersFile,
      JSON.stringify(
        {
          customers: Array.isArray(next.customers) ? next.customers : [],
          authCodes:
            next.authCodes && typeof next.authCodes === 'object' && !Array.isArray(next.authCodes)
              ? next.authCodes
              : {},
          orders: Array.isArray(next.orders) ? next.orders : [],
          pendingCheckouts: Array.isArray(next.pendingCheckouts) ? next.pendingCheckouts : []
        },
        null,
        2
      ),
      'utf8'
    ),
    fs.writeFile(
      systemFile,
      JSON.stringify(
        {
          emailSignups: Array.isArray(next.emailSignups) ? next.emailSignups : [],
          supportMessages: Array.isArray(next.supportMessages) ? next.supportMessages : [],
          promoCodes:
            next.promoCodes && typeof next.promoCodes === 'object' && !Array.isArray(next.promoCodes)
              ? next.promoCodes
              : initialSystemData.promoCodes,
          admin: normalizeAdminRecord(next?.admin)
        },
        null,
        2
      ),
      'utf8'
    )
  ]);
}

export async function getProducts() {
  const db = await readStore();
  return db.products;
}

function inferGender(product) {
  const name = String(product?.name || '').toLowerCase();
  if (name.includes('cropped hoodie')) return 'women';
  if (name.includes('hoodie')) return 'unisex';
  if (name.includes('women') || name.includes('legging') || name.includes('crop') || name.includes('yoga')) return 'women';
  return 'men';
}

export async function addProduct(input = {}) {
  const db = await readStore();
  const name = String(input.name || '').trim();
  const price = Number(input.price);
  const image = String(input.image || '').trim();

  if (!name) {
    throw new Error('Product name is required.');
  }

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error('Valid product price is required.');
  }

  if (!image) {
    throw new Error('Product image is required.');
  }

  const colors = Array.isArray(input.colors) && input.colors.length ? input.colors : ['Black'];
  const sizes = Array.isArray(input.sizes) && input.sizes.length ? input.sizes : ['XS', 'S', 'M', 'L', 'XL'];
  const product = {
    id: crypto.randomUUID(),
    name,
    price,
    image,
    colors,
    sizes,
    gender: input.gender || inferGender(input),
    description: String(input.description || 'New product added by admin.'),
    category: String(input.category || 'tops'),
    style: String(input.style || 'standard'),
    featured: input.featured === true
  };

  db.products.unshift(product);
  await writeStore(db);
  return product;
}

export async function updateProduct(id, input = {}) {
  const db = await readStore();
  const idx = db.products.findIndex((product) => product.id === id);
  if (idx === -1) return null;

  const current = db.products[idx];
  const name = String(input.name ?? current.name).trim();
  const price = Number(input.price ?? current.price);
  const image = String(input.image ?? current.image).trim();

  if (!name) {
    throw new Error('Product name is required.');
  }

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error('Valid product price is required.');
  }

  if (!image) {
    throw new Error('Product image is required.');
  }

  const colors = Array.isArray(input.colors) && input.colors.length ? input.colors : current.colors || ['Black'];
  const sizes =
    Array.isArray(input.sizes) && input.sizes.length
      ? input.sizes
      : current.sizes || ['XS', 'S', 'M', 'L', 'XL'];

  const updated = {
    ...current,
    ...input,
    id: current.id,
    name,
    price,
    image,
    colors,
    sizes,
    gender: input.gender || current.gender || inferGender(input),
    featured: input.featured === true,
  };

  db.products[idx] = updated;
  await writeStore(db);
  return updated;
}

export async function deleteProduct(id) {
  const db = await readStore();
  const prevCount = db.products.length;
  db.products = db.products.filter((item) => item.id !== id);
  if (db.products.length === prevCount) return false;
  await writeStore(db);
  return true;
}

export async function getPromo(code) {
  const db = await readStore();
  return db.promoCodes[String(code).toLowerCase()] || null;
}

export async function addEmailSignup(email) {
  const db = await readStore();
  const nextEmail = String(email).trim().toLowerCase();
  if (!nextEmail) return { added: false };

  if (!db.emailSignups.includes(nextEmail)) {
    db.emailSignups.push(nextEmail);
    await writeStore(db);
    return { added: true };
  }

  return { added: false };
}

export async function validateAdmin(email, password) {
  const db = await readStore();
  if (String(email).trim().toLowerCase() !== String(db?.admin?.email || '').toLowerCase()) return false;
  return verifyAdminPassword(String(password).trim(), db.admin);
}

export async function getCheckoutQuote(cart = [], promoCode = '') {
  const db = await readStore();
  const subtotal = cart.reduce((sum, item) => {
    const linePrice = Number(item.price) || 0;
    const lineQty = Number(item.qty) || 0;
    return sum + linePrice * lineQty;
  }, 0);

  const promo = db.promoCodes[String(promoCode).toLowerCase()];
  const discount = promo && promo.active ? subtotal * promo.discountRate : 0;
  const total = subtotal - discount;

  return {
    subtotal,
    discount,
    total,
    appliedPromoCode: promo && promo.active ? promo.code : ''
  };
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function maskCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function requestCustomerCode(email, name = '', phone = '') {
  const db = await readStore();
  const normalizedEmail = normalizeEmail(email);
  const normalizedName = String(name || '').trim();
  const normalizedPhone = String(phone || '').trim();

  if (!normalizedEmail) {
    throw new Error('Email is required.');
  }

  const code = maskCode();
  db.authCodes[normalizedEmail] = {
    code,
    email: normalizedEmail,
    name: normalizedName,
    phone: normalizedPhone,
    expiresAt: Date.now() + 10 * 60 * 1000
  };
  await writeStore(db);

  return { email: normalizedEmail, code };
}

export async function verifyCustomerCode(email, code, name = '', phone = '') {
  const db = await readStore();
  const normalizedEmail = normalizeEmail(email);
  const normalizedCode = String(code || '').trim();
  const normalizedPhone = String(phone || '').trim();
  const current = db.authCodes[normalizedEmail];

  if (!current) {
    throw new Error('No verification code found for this email.');
  }

  if (Date.now() > Number(current.expiresAt || 0)) {
    delete db.authCodes[normalizedEmail];
    await writeStore(db);
    throw new Error('Verification code expired. Request a new code.');
  }

  if (normalizedCode !== String(current.code)) {
    throw new Error('Invalid verification code.');
  }

  delete db.authCodes[normalizedEmail];

  const displayName = String(name || '').trim() || String(current.name || '').trim() || normalizedEmail.split('@')[0];
  const displayPhone = normalizedPhone || String(current.phone || '').trim();
  let customer = db.customers.find((entry) => normalizeEmail(entry.email) === normalizedEmail);

  if (!customer) {
    customer = {
      id: crypto.randomUUID(),
      email: normalizedEmail,
      name: displayName,
      phone: displayPhone,
      address: '',
      shippingAddress: '',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };
    db.customers.push(customer);
  } else {
    customer.name = customer.name || displayName;
    customer.phone = displayPhone || customer.phone || '';
    customer.address = customer.address || '';
    customer.shippingAddress = customer.shippingAddress || '';
    customer.lastLoginAt = new Date().toISOString();
  }

  await writeStore(db);
  return customer;
}

export async function createOrder(input = {}) {
  const db = await readStore();
  const customerEmail = normalizeEmail(input.customerEmail);
  const cart = Array.isArray(input.cart) ? input.cart : [];
  const promoCode = String(input.promoCode || '').trim().toLowerCase();
  const sessionId = String(input.sessionId || '').trim();

  if (!customerEmail) {
    throw new Error('Customer email is required for order history.');
  }

  const customers = Array.isArray(db.customers) ? db.customers : [];
  const customer = customers.find((entry) => normalizeEmail(entry.email) === customerEmail);
  if (!customer) {
    throw new Error('Customer account not found. Please login again.');
  }

  if (sessionId) {
    const existing = (Array.isArray(db.orders) ? db.orders : []).find(
      (order) => String(order.stripeSessionId || '') === sessionId
    );
    if (existing) return existing;
  }

  const quote = await getCheckoutQuote(cart, promoCode);
  const order = {
    id: `ORD-${Date.now()}`,
    customerEmail,
    items: cart,
    subtotal: quote.subtotal,
    discount: quote.discount,
    total: quote.total,
    promoCode: quote.appliedPromoCode || '',
    stripeSessionId: sessionId,
    status: 'paid',
    createdAt: new Date().toISOString()
  };

  if (!Array.isArray(db.orders)) db.orders = [];
  db.orders.unshift(order);
  await writeStore(db);
  return order;
}

export async function getCustomerHistory(email) {
  const db = await readStore();
  const normalizedEmail = normalizeEmail(email);
  const customers = Array.isArray(db.customers) ? db.customers : [];
  const customer = customers.find((entry) => normalizeEmail(entry.email) === normalizedEmail);
  if (!customer) return null;
  const orders = (Array.isArray(db.orders) ? db.orders : []).filter(
    (order) => normalizeEmail(order.customerEmail) === normalizedEmail
  );
  return { customer, orders };
}

export async function updateCustomerProfile(email, profile = {}) {
  const db = await readStore();
  const normalizedEmail = normalizeEmail(email);
  const customer = (Array.isArray(db.customers) ? db.customers : []).find(
    (entry) => normalizeEmail(entry.email) === normalizedEmail
  );
  if (!customer) return null;

  customer.name = String(profile.name ?? customer.name ?? '').trim() || customer.name || normalizedEmail.split('@')[0];
  customer.phone = String(profile.phone ?? customer.phone ?? '').trim();
  customer.address = String(profile.address ?? customer.address ?? '').trim();
  customer.shippingAddress = String(profile.shippingAddress ?? customer.shippingAddress ?? '').trim();
  customer.updatedAt = new Date().toISOString();
  await writeStore(db);
  return customer;
}

export async function addSupportMessage(input = {}) {
  const db = await readStore();
  if (!Array.isArray(db.supportMessages)) db.supportMessages = [];
  const message = {
    id: crypto.randomUUID(),
    email: normalizeEmail(input.email || ''),
    name: String(input.name || '').trim(),
    subject: String(input.subject || '').trim(),
    message: String(input.message || '').trim(),
    createdAt: new Date().toISOString()
  };
  db.supportMessages.unshift(message);
  await writeStore(db);
  return message;
}

export async function findOrderBySessionId(sessionId = '') {
  const db = await readStore();
  const id = String(sessionId || '').trim();
  if (!id) return null;
  return (Array.isArray(db.orders) ? db.orders : []).find((order) => String(order.stripeSessionId || '') === id) || null;
}

export async function savePendingCheckout(input = {}) {
  const db = await readStore();
  const sessionId = String(input.sessionId || '').trim();
  if (!sessionId) throw new Error('sessionId is required.');

  if (!Array.isArray(db.pendingCheckouts)) db.pendingCheckouts = [];
  const next = {
    sessionId,
    customerEmail: normalizeEmail(input.customerEmail || ''),
    customerPhone: String(input.customerPhone || '').trim(),
    promoCode: String(input.promoCode || '').trim().toLowerCase(),
    cart: Array.isArray(input.cart) ? input.cart : [],
    createdAt: new Date().toISOString()
  };

  db.pendingCheckouts = db.pendingCheckouts.filter((entry) => String(entry.sessionId || '') !== sessionId);
  db.pendingCheckouts.unshift(next);
  await writeStore(db);
  return next;
}

export async function consumePendingCheckout(sessionId = '') {
  const db = await readStore();
  const id = String(sessionId || '').trim();
  if (!id) return null;
  if (!Array.isArray(db.pendingCheckouts)) db.pendingCheckouts = [];

  const found = db.pendingCheckouts.find((entry) => String(entry.sessionId || '') === id) || null;
  if (!found) return null;

  db.pendingCheckouts = db.pendingCheckouts.filter((entry) => String(entry.sessionId || '') !== id);
  await writeStore(db);
  return found;
}
