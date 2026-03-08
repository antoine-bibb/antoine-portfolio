# JCF Backend

## Start
1. `cd backend`
2. `npm install`
3. Create `.env` from `.env.example` and set:
   - `STRIPE_SECRET_KEY`
   - Optional email settings for verification/confirmation:
     - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`
   - Optional SMS settings for text invoice:
     - `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`
4. `npm run dev`

Runs at `http://localhost:4000` by default.

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
  - body: `{ "email": "admin@jcf.com", "password": "admin123" }`
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
