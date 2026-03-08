# JCF Backend

## Start
1. `cd backend`
2. `npm install`
3. Create `.env` from `.env.example` and set:
   - `STRIPE_SECRET_KEY`
   - Admin auth settings:
     - `ADMIN_EMAIL`
     - `ADMIN_PASSWORD`
     - `ADMIN_HASH_ITERATIONS`
     - `ADMIN_SESSION_SECRET` (required for stable admin tokens across restarts)
     - `ADMIN_TOKEN_TTL_MS`
   - CORS allowlist:
     - `CORS_ORIGINS` (comma-separated, e.g. `https://shop.example.com,https://admin.example.com`)
   - Optional rate-limit settings:
     - `ADMIN_LOGIN_WINDOW_MS`, `ADMIN_LOGIN_MAX`
     - `AUTH_REQUEST_WINDOW_MS`, `AUTH_REQUEST_MAX`
     - `AUTH_VERIFY_WINDOW_MS`, `AUTH_VERIFY_MAX`
   - Optional email settings for verification/confirmation:
     - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`
   - Optional SMS settings for text invoice:
     - `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`
4. `npm run dev`

Runs at `http://localhost:4000` by default.

If legacy plaintext admin credentials are found in data files, they are migrated to hashed credentials on startup.

## Stripe Webhook (Local Testing)
Use Stripe CLI to forward events:
1. `stripe listen --forward-to localhost:4000/api/payments/webhook`
2. Copy the displayed signing secret (`whsec_...`) into `.env` as `STRIPE_WEBHOOK_SECRET`
3. Complete a test checkout

Webhook finalizes orders server-side on `checkout.session.completed`.

## Endpoints
- `GET /api/health`
- `GET /api/products`
- `GET /api/promos/:code`
- `POST /api/email-signups`
  - body: `{ "email": "name@example.com" }`
- `POST /api/admin/login`
  - body: `{ "email": "<ADMIN_EMAIL>", "password": "<ADMIN_PASSWORD>" }`
  - response: `{ "ok": true, "token": "...", "expiresAt": 1234567890 }`
- `POST /api/admin/products` (requires `Authorization: Bearer <token>`)
- `PUT /api/admin/products/:id` (requires `Authorization: Bearer <token>`)
- `DELETE /api/admin/products/:id` (requires `Authorization: Bearer <token>`)
- `POST /api/auth/request-code`
  - body: `{ "email": "name@example.com", "name": "Name", "phone": "+15555550123" }`
- `POST /api/auth/verify-code`
  - body: `{ "email": "name@example.com", "code": "123456", "name": "Name", "phone": "+15555550123" }`
- `GET /api/customers/:email/history`
- `PUT /api/customers/:email/profile`
  - body: `{ "name": "...", "phone": "...", "address": "...", "shippingAddress": "..." }`
- `POST /api/support/messages`
  - body: `{ "email": "name@example.com", "name": "Name", "subject": "Help", "message": "..." }`
- `POST /api/checkout/quote`
  - body: `{ "cart": [{ "price": 100, "qty": 2 }], "promoCode": "jcf-fall" }`
- `POST /api/payments/checkout-session`
  - body: `{ "cart": [...], "promoCode": "jcf-fall", "customerEmail": "name@example.com" }`

## Data
Data is split and stored in:
- `backend/data/products.json` (catalog)
- `backend/data/users.json` (customers, auth codes, orders)
- `backend/data/system.json` (admin, promo codes, email signups)

On first run, if legacy `backend/data/db.json` exists, data is auto-migrated into the new files.
