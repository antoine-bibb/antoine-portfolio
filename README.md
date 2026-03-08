# JCF Store Prototype

Nike-inspired e-commerce storefront with:

- Landing page hero and featured products
- Customer login (for checkout access)
- Separate admin login
- Admin inventory management (add/remove products, edit prices)
- Cart management
- 3-step checkout flow (Shipping → Payment → Review)

## Run locally

Because this is a static app, you can open `index.html` directly or run a simple local server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

For mobile/LAN testing, open `http://<your-computer-ip>:4173` on the phone and ensure the backend is reachable at `http://<your-computer-ip>:4000`.

## API base configuration

Frontend API base defaults to `http(s)://<current-hostname>:4000/api`.
You can override it by setting one of:

- `window.APP_CONFIG = { apiBase: 'https://api.example.com/api' }` before `app.js` loads, or
- `<meta name="api-base" content="https://api.example.com/api">` in `index.html`.

## Admin credentials

Configure admin credentials with backend env vars:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
