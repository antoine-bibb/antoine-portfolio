import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import crypto from 'node:crypto';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import {
  addSupportMessage,
  addProduct,
  consumePendingCheckout,
  createOrder,
  deleteProduct,
  findOrderBySessionId,
  addEmailSignup,
  getCustomerHistory,
  getCheckoutQuote,
  getProducts,
  getPromo,
  requestCustomerCode,
  savePendingCheckout,
  updateCustomerProfile,
  updateProduct,
  verifyCustomerCode,
  validateAdmin
} from './store.js';

const app = express();
const port = process.env.PORT || 4000;
const stripeKey = process.env.STRIPE_SECRET_KEY || '';
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
const stripe = stripeKey ? new Stripe(stripeKey) : null;
const smtpHost = process.env.SMTP_HOST || '';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true';
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const mailFrom = process.env.MAIL_FROM || smtpUser || 'no-reply@jcf.local';
const twilioSid = process.env.TWILIO_ACCOUNT_SID || '';
const twilioToken = process.env.TWILIO_AUTH_TOKEN || '';
const twilioFrom = process.env.TWILIO_FROM_NUMBER || '';
const adminSessionSecret = process.env.ADMIN_SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const adminTokenTtlMs = Number(process.env.ADMIN_TOKEN_TTL_MS || 12 * 60 * 60 * 1000);
const configuredOrigins = String(process.env.CORS_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const defaultOrigins = ['http://localhost:4173', 'http://127.0.0.1:4173', 'http://localhost:5500', 'http://127.0.0.1:5500'];
const allowedOrigins = new Set(configuredOrigins.length ? configuredOrigins : defaultOrigins);
const adminLoginWindowMs = Number(process.env.ADMIN_LOGIN_WINDOW_MS || 15 * 60 * 1000);
const adminLoginMax = Number(process.env.ADMIN_LOGIN_MAX || 6);
const authRequestWindowMs = Number(process.env.AUTH_REQUEST_WINDOW_MS || 10 * 60 * 1000);
const authRequestMax = Number(process.env.AUTH_REQUEST_MAX || 10);
const authVerifyWindowMs = Number(process.env.AUTH_VERIFY_WINDOW_MS || 10 * 60 * 1000);
const authVerifyMax = Number(process.env.AUTH_VERIFY_MAX || 12);
const rateLimitBuckets = new Map();
const twilioClient = twilioSid && twilioToken ? twilio(twilioSid, twilioToken) : null;
const mailer =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass }
      })
    : null;

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error('Origin not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

function signAdminToken(payload) {
  return crypto.createHmac('sha256', adminSessionSecret).update(payload).digest('hex');
}

function createAdminToken() {
  const tokenId = crypto.randomBytes(24).toString('hex');
  const expiresAt = Date.now() + adminTokenTtlMs;
  const payload = `${tokenId}.${expiresAt}`;
  const signature = signAdminToken(payload);
  return { token: `${payload}.${signature}`, expiresAt };
}

function verifyAdminToken(token = '') {
  const [tokenId = '', expiresAtRaw = '', signature = ''] = String(token).split('.');
  const expiresAt = Number(expiresAtRaw);
  if (!tokenId || !signature || !Number.isFinite(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  const payload = `${tokenId}.${expiresAt}`;
  const expected = signAdminToken(payload);
  if (signature.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

function requireAdmin(req, res, next) {
  const authHeader = String(req.headers.authorization || '');
  if (!authHeader.startsWith('Bearer ')) {
    res.status(401).json({ ok: false, message: 'Admin authorization required.' });
    return;
  }

  const token = authHeader.slice(7).trim();
  if (!verifyAdminToken(token)) {
    res.status(401).json({ ok: false, message: 'Invalid or expired admin token.' });
    return;
  }

  next();
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  return String(req.socket?.remoteAddress || req.ip || 'unknown');
}

function createRateLimiter({ id, windowMs, max }) {
  return (req, res, next) => {
    const now = Date.now();
    const key = `${id}:${getClientIp(req)}`;
    const current = rateLimitBuckets.get(key);

    if (!current || now >= current.resetAt) {
      rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
      next();
      return;
    }

    if (current.count >= max) {
      const retryAfterSeconds = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
      res.setHeader('Retry-After', String(retryAfterSeconds));
      res.status(429).json({ ok: false, message: 'Too many requests. Please try again later.' });
      return;
    }

    current.count += 1;
    rateLimitBuckets.set(key, current);
    next();
  };
}

const adminLoginLimiter = createRateLimiter({
  id: 'admin-login',
  windowMs: adminLoginWindowMs,
  max: adminLoginMax
});

const authRequestLimiter = createRateLimiter({
  id: 'auth-request-code',
  windowMs: authRequestWindowMs,
  max: authRequestMax
});

const authVerifyLimiter = createRateLimiter({
  id: 'auth-verify-code',
  windowMs: authVerifyWindowMs,
  max: authVerifyMax
});

async function sendOrderNotifications(order, customerEmail = '', customerPhone = '') {
  if (mailer && customerEmail) {
    await mailer.sendMail({
      from: mailFrom,
      to: customerEmail,
      subject: `Order confirmation ${order.id}`,
      text: `Thanks for your order. Order ${order.id} total: $${Number(order.total || 0).toFixed(2)}.`
    });
  }

  const smsTarget = String(customerPhone || '').trim();
  if (twilioClient && twilioFrom && smsTarget) {
    await twilioClient.messages.create({
      from: twilioFrom,
      to: smsTarget,
      body: `JCF order ${order.id} confirmed. Total $${Number(order.total || 0).toFixed(2)}.`
    });
  }
}

app.post('/api/payments/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!stripe || !stripeWebhookSecret) {
    res.status(503).json({ ok: false, message: 'Stripe webhook is not configured.' });
    return;
  }

  const signature = req.headers['stripe-signature'];
  if (!signature || Array.isArray(signature)) {
    res.status(400).send('Missing Stripe signature.');
    return;
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, stripeWebhookSecret);
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error instanceof Error ? error.message : 'Invalid signature'}`);
    return;
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const sessionId = String(session.id || '');
      const existing = await findOrderBySessionId(sessionId);
      if (existing) {
        res.json({ received: true, duplicate: true });
        return;
      }

      const pending = await consumePendingCheckout(sessionId);
      if (!pending) {
        res.json({ received: true, skipped: true });
        return;
      }

      const order = await createOrder({
        customerEmail: pending.customerEmail,
        cart: pending.cart,
        promoCode: pending.promoCode,
        sessionId
      });
      await sendOrderNotifications(order, pending.customerEmail, pending.customerPhone);
    }

    res.json({ received: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: 'Webhook processing failed.' });
  }
});

app.use(express.json({ limit: '10mb' }));

app.get('/', (_req, res) => {
  res.json({
    ok: true,
    service: 'jcf-backend',
    message: 'API is running. Use /api/health for health check.'
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'jcf-backend' });
});

app.get('/api/products', async (_req, res, next) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/api/promos/:code', async (req, res, next) => {
  try {
    const promo = await getPromo(req.params.code);
    if (!promo || !promo.active) {
      res.status(404).json({ valid: false, message: 'Promo code not found.' });
      return;
    }

    res.json({
      valid: true,
      code: promo.code,
      discountRate: promo.discountRate
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/email-signups', async (req, res, next) => {
  try {
    const { email } = req.body || {};
    if (!email) {
      res.status(400).json({ message: 'Email is required.' });
      return;
    }

    const result = await addEmailSignup(email);
    res.status(result.added ? 201 : 200).json({
      ok: true,
      added: result.added
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/admin/login', adminLoginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    const valid = await validateAdmin(email, password);
    if (!valid) {
      res.status(401).json({ ok: false, message: 'Invalid admin credentials.' });
      return;
    }

    const session = createAdminToken();
    res.json({ ok: true, role: 'admin', token: session.token, expiresAt: session.expiresAt });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/request-code', authRequestLimiter, async (req, res, next) => {
  try {
    const { email = '', name = '', phone = '' } = req.body || {};
    const verification = await requestCustomerCode(email, name, phone);
    const code = verification.code;
    const recipient = verification.email;

    if (mailer) {
      await mailer.sendMail({
        from: mailFrom,
        to: recipient,
        subject: 'Your JCF verification code',
        text: `Your JCF verification code is ${code}. It expires in 10 minutes.`
      });
    } else {
      console.log(`[JCF AUTH] Verification code for ${recipient}: ${code}`);
    }

    res.json({
      ok: true,
      message: 'Verification code sent.',
      devCode: mailer ? undefined : code
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/verify-code', authVerifyLimiter, async (req, res, next) => {
  try {
    const { email = '', code = '', name = '', phone = '' } = req.body || {};
    const customer = await verifyCustomerCode(email, code, name, phone);
    res.json({ ok: true, customer });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ ok: false, message: error.message });
      return;
    }
    next(error);
  }
});

app.get('/api/customers/:email/history', async (req, res, next) => {
  try {
    const history = await getCustomerHistory(req.params.email);
    if (!history) {
      res.status(404).json({ ok: false, message: 'Customer not found.' });
      return;
    }
    res.json({ ok: true, ...history });
  } catch (error) {
    next(error);
  }
});

app.put('/api/customers/:email/profile', async (req, res, next) => {
  try {
    const customer = await updateCustomerProfile(req.params.email, req.body || {});
    if (!customer) {
      res.status(404).json({ ok: false, message: 'Customer not found.' });
      return;
    }
    res.json({ ok: true, customer });
  } catch (error) {
    next(error);
  }
});

app.post('/api/support/messages', async (req, res, next) => {
  try {
    const { email = '', name = '', subject = '', message = '' } = req.body || {};
    if (!email || !message) {
      res.status(400).json({ ok: false, message: 'Email and message are required.' });
      return;
    }

    const saved = await addSupportMessage({ email, name, subject, message });
    const target = 'jcfitsco@gmail.com';
    if (mailer) {
      await mailer.sendMail({
        from: mailFrom,
        to: target,
        replyTo: email,
        subject: subject || `Support request from ${email}`,
        text: `From: ${name || 'Customer'} <${email}>\n\n${message}`
      });
    } else {
      console.log(`[JCF SUPPORT] To ${target} | From ${email} | ${subject}\n${message}`);
    }

    res.status(201).json({ ok: true, messageId: saved.id });
  } catch (error) {
    next(error);
  }
});

app.post('/api/admin/products', requireAdmin, async (req, res, next) => {
  try {
    const product = await addProduct(req.body || {});
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ ok: false, message: error.message });
      return;
    }
    next(error);
  }
});

app.put('/api/admin/products/:id', requireAdmin, async (req, res, next) => {
  try {
    const updated = await updateProduct(req.params.id, req.body || {});
    if (!updated) {
      res.status(404).json({ ok: false, message: 'Product not found.' });
      return;
    }
    res.json(updated);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ ok: false, message: error.message });
      return;
    }
    next(error);
  }
});

app.delete('/api/admin/products/:id', requireAdmin, async (req, res, next) => {
  try {
    const deleted = await deleteProduct(req.params.id);
    if (!deleted) {
      res.status(404).json({ ok: false, message: 'Product not found.' });
      return;
    }
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post('/api/checkout/quote', async (req, res, next) => {
  try {
    const { cart = [], promoCode = '' } = req.body || {};
    const quote = await getCheckoutQuote(cart, promoCode);
    res.json(quote);
  } catch (error) {
    next(error);
  }
});

app.post('/api/payments/checkout-session', async (req, res, next) => {
  try {
    if (!stripe) {
      res.status(503).json({ ok: false, message: 'Stripe is not configured.' });
      return;
    }

    const { cart = [], promoCode = '', customerEmail = '', customerPhone = '' } = req.body || {};
    const quote = await getCheckoutQuote(cart, promoCode);
    const totalCents = Math.max(0, Math.round(Number(quote.total || 0) * 100));

    if (!totalCents) {
      res.status(400).json({ ok: false, message: 'Cart total must be greater than 0.' });
      return;
    }

    const origin = req.headers.origin || 'http://localhost:5500';
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: totalCents,
            product_data: {
              name: 'JCF Order',
              description: quote.appliedPromoCode
                ? `Promo applied: ${quote.appliedPromoCode}`
                : 'JCF storefront checkout'
            }
          }
        }
      ],
      customer_email: customerEmail || undefined,
      success_url: `${origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?payment=cancel`,
      metadata: {
        promoCode: quote.appliedPromoCode || ''
      }
    });

    await savePendingCheckout({
      sessionId: session.id,
      customerEmail,
      customerPhone,
      cart,
      promoCode: quote.appliedPromoCode || promoCode
    });

    res.json({ ok: true, url: session.url, id: session.id });
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({
    ok: false,
    message: 'Unexpected server error.'
  });
});

app.listen(port, () => {
  console.log(`JCF backend running at http://localhost:${port}`);
});
