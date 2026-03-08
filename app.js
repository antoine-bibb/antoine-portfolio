const initialProducts = [
  // ========================
  // MEN'S PRODUCTS
  // ========================
  {
    id: crypto.randomUUID(),
    name: "JCF OG Hoodie",
    price: 125.0,
    colors: ['Black','white','red','gray'],
    gender: 'men',
    image: 'assets/black-slim-fit-hoodie-jcf.png',
    description: `JCF Premium Slim-Fit Hoodie
Elevate your streetwear game with the JCF Premium Slim-Fit Hoodie, a cornerstone of the "jus' casual fits" collection. This piece bridges the gap between high-end luxury and athletic utility, designed for the individual who demands style without sacrificing security.

Design & Fit
Tailored Silhouette: A modern, slim-fit cut that provides a sleek look while offering the comfort of premium French terry.

Signature Colorway: Features a matte Main-Black body contrasted by a Deep Red inner hood lining and ribbed accents.

Elevated Details: High-contrast White drawstrings finished with Deep Red metal aglets.

Key Features
Secure Utility Pockets: Innovative kangaroo pocket design featuring Deep Red vertical zippers to ensure your essentials stay put, whether you're sitting or on the move.

Signature Branding: * JCF Script Logo: High-density white embroidery on the left chest.

Wristband Signature: The left cuff features the iconic Lion/Owl split logo above the vertically stacked "just casual days" manifesto—a JCF exclusive design detail.

Comfort Ribbing: Reinforced Deep Red ribbed waistband and cuffs for shape retention and a snug, premium feel.

Materials & Care
Fabric: Heavyweight, luxury-grade cotton blend.

Care: Machine wash cold, tumble dry low to maintain the vibrancy of the Deep Red accents.`,
    category: 'hoodies',
    style: 'hoodie',
    featured: true,
  },

  {
    id: crypto.randomUUID(),
    name: "JCF Varsity Oversized Hoodie",
    price: 150.0,
    colors: ['Black', 'Cream', 'Red'],
    gender: 'men',
    image: 'assets/varsity-hoodie-jcf.png',
    description: "The JCF Varsity Oversized Hoodie redefines the classic letterman aesthetic with a modern, streetwear silhouette. Designed with a generous, relaxed fit and premium contrasting textures, this piece is the ultimate statement of luxury and comfort.\n\nDesign & Fit\nOversized Silhouette: A broad-shouldered, relaxed cut for maximum comfort and a bold street-ready profile.\n\nVarsity Aesthetic: Main-Black body paired with luxury Cream-colored sleeves and a Deep Red hood for a high-end collegiate look.\n\nKey Features\nSignature Branding: Features a large '26' patch in Cream with Deep Red trim on the left sleeve and a high-density 'JCF' script logo on the chest.\n\nSecure Utility: Deep Red zippered kangaroo pockets designed to keep your valuables safe in any environment.\n\nWristband Manifesto: The left cuff features the iconic Lion/Owl split logo above the vertically stacked 'jus' casual fits' signature—the JCF hallmark of authenticity.\n\nMaterials & Care\nFabric: Ultra-heavyweight French terry body with soft-touch synthetic leather sleeves.\n\nCare: Professional dry clean recommended to preserve sleeve texture and patch integrity.",
    category: 'hoodies',
    style: 'hoodie',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Signature Crop",
    price: 95.0,
    colors: ['Black', 'Red', 'White'],
    gender: 'women',
    image: 'assets/cropped-varsity-hoodie-jcf.png',
    description: "The JCF Women's Signature Crop combines a sleek, sexy aesthetic with the brand's core focus on utility. Tailored to hit perfectly above the waist, this hoodie offers a high-fashion edge to athletic performance gear.\n\nDesign & Fit\nCropped Cut: A flattering, form-fitting cropped silhouette designed to pair seamlessly with high-waisted leggings.\n\nLuxury Accents: Features a Deep Red inner hood lining and matching ribbed cuffs for a sophisticated pop of color.\n\nKey Features\nInvisible Security: Sleek, hidden side-seam zipper pockets provide secure storage without interrupting the streamlined fit.\n\nSignature Branding: 'JCF' script logo on the chest and a bold '26' varsity patch centered on the back.\n\nCuff Signature: The wearer’s left wristband carries the vertical 'jus' casual fits' manifesto and Lion/Owl split-face logo in Deep Red thread.\n\nMaterials & Care\nFabric: Premium mid-weight French terry for a soft, breathable feel.\n\nCare: Machine wash cold; lay flat to dry to maintain the cropped shape.",
    category: 'hoodies',
    style: 'hoodie',
    featured: true,
  },
{
    id: crypto.randomUUID(),
    name: "JCF Utility Cargo Jogger",
    price: 110.0,
    colors: ['Black', 'Red', 'White'],
    gender: 'men',
    image: 'assets/tapered-cargo-joggers-jcf.png',
    description: `The JCF Utility Cargo Jogger is the ultimate fusion of tactical function and luxury comfort. Engineered for the modern mover, these joggers ensure your essentials are always secure without compromising a high-end silhouette.

Design & Fit
Tailored Utility: A fitted, tapered cut inspired by high-end heritage brands, providing a sharp look that stays comfortable all day.
Fabric: Premium high-gauge matte black French terry with reinforced deep red bar-tack stitching for maximum durability.

Key Features
Maximum Security: Featuring zippered hand pockets and dual thigh cargo pockets with hidden Deep Red zippers to prevent items from falling out.
Signature Branding: White 'JCF' script logo on the left thigh and a tonal Deep Red Lion/Owl split-face logo on the cargo flap.
Premium Hardware: Matte black metal hardware and white drawstrings with deep red metal aglets.

Materials & Care
Fabric: Luxury-grade cotton/polyester blend.
Care: Machine wash cold inside out; tumble dry low.`,
    category: 'pants',
    style: 'joggers',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF High-Fashion Pintuck Jogger",
    price: 135.0,
    colors: ['Black', 'White', 'Gray'],
    gender: 'men',
    image: 'assets/slim-jogger-style-3-jcf.png',
    description: `Elevate your off-duty look with the JCF High-Fashion Pintuck Jogger. This piece bridges the gap between tailored trousers and luxury athletic wear, featuring a sophisticated design that transitions effortlessly from day to night.

Design & Fit
Tailored Aesthetic: Features a permanent crisp pintuck seam down the center of each leg for a sharp, structured appearance.
Luxury Details: High-contrast white stripes running down the inner and outer leg seams for a bold, designer profile.

Key Features
Invisible Security: Integrated side-seam zippers provide secure storage while maintaining a clean, streamlined silhouette.
Minimalist Branding: Minimalist white 'JCF' script logo on the thigh and a subtle, tonal deep gray Lion/Owl logo on the lower back calf.
Refined Waistband: Flat-front waistband with an elasticated back for a customized, premium fit.

Materials & Care
Fabric: High-density performance ponte fabric.
Care: Cool iron on reverse; machine wash cold on a gentle cycle.`,
    category: 'pants',
    style: 'joggers',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Lounge & Gym Jogger",
    price: 90.0,
    colors: ['Black', 'Gray', 'Red'],
    gender: 'men',
    image: 'assets/gym-jogger-jcf.png',
    description: `Built for recovery days and high-intensity sessions alike, the JCF Lounge & Gym Jogger focuses on ultimate mobility and signature JCF security. These are the softest joggers in the collection, designed to be worn anywhere.

Design & Fit
Athletic Taper: A more relaxed fit through the seat and thigh for movement, tapering down to a secure ribbed ankle cuff.
Color Blocking: Matte black body with athletic secondary-gray paneling for a modern, sporty aesthetic.

Key Features
Gym-Ready Security: Standard side pockets equipped with high-visibility Deep Red zippers to keep your tech safe during any activity.
Bold Branding: White 'JCF' script logo on the left thigh and the iconic Lion/Owl split-face logo embroidered in Deep Red on the right calf.
Comfort First: Ultra-soft performance fleece with a thick elastic waistband and premium braided drawstrings.

Materials & Care
Fabric: Ultra-soft brushed-back performance fleece.
Care: Machine wash cold; avoid fabric softeners to maintain moisture-wicking properties.`,
    category: 'pants',
    style: 'joggers',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Luxe Curved-Hem Tee",
    price: 65.0,
    colors: ['Black', 'Gray', 'Olive'],
    gender: 'men',
    image: 'assets/black-curved-hem-tee-jcf.png',
    description: `The JCF Luxe Curved-Hem Tee is a masterclass in minimalist high-end streetwear. Combining a custom tailored silhouette with performance-grade luxury materials, this isn't just a basic tee—it's an essential foundation for the modern wardrobe.

Design & Fit
Sculpted Silhouette: A slim-fit athletic cut featuring a signature longline curved hem for a sophisticated, layered look.
Premium Texture: Crafted from a custom Pima cotton-silk blend with a subtle waffle-knit texture that offers superior breathability and a high-end hand feel.

Key Features
Hardware Detail: Adorned with a custom-molded, polished silver-tone metallic Lion/Owl split-face badge on the left chest.
Signature Stitching: Reinforced tonal 'X' stitching at the neck and a Deep Red contrast bar-tack for a subtle designer touch.
Refined Comfort: Features a tagless interior with a soft-ribbed crew neck that maintains its shape through every wash.

Materials & Care
Fabric: Lightweight, breathable Pima cotton and silk performance blend.
Care: Machine wash cold with like colors; tumble dry low. Do not iron directly on the metallic badge.`,
    category: 'shirts',
    style: 't-shirt',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Signature Utility Duffel",
    price: 210.0,
    colors: ['Black', 'Red'],
    gender: 'unisex',
    image: 'assets/signature-utility-duffel-jcf.png',
    description: `The JCF Signature Utility Duffel is the ultimate travel and gym companion, blending massive storage capacity with high-fashion branding. This bag is engineered for those who carry their life with them and refuse to compromise on style or security.

Design & Fit
Structured Silhouette: A large, reinforced cylindrical body that maintains its sharp, premium shape whether empty or fully packed.
Luxury Aesthetics: Matte-black ballistic nylon paired with deep red piping and high-end synthetic leather accents.

Key Features
Statement Branding: Features a massive, high-density embroidered Lion/Owl split-face logo in Deep Red, anchored by the signature JCF script logo in the same tonal thread.
Tactical Storage: Multiple secure compartments featuring Deep Red waterproof zippers, including a dedicated shoe garage and an internal RFID-blocking pocket for sensitive items.
Premium Hardware: Heavy-duty matte black metal clasps, reinforced carrying handles, and an embossed leather shoulder pad featuring the "jus' casual fits" manifesto.

Materials & Care
Fabric: Industrial-grade ballistic nylon with a water-resistant coating.
Care: Spot clean with a damp cloth; do not machine wash. Use leather conditioner on the handle and strap accents to maintain the premium finish.`,
    category: 'accessories',
    style: 'bag',
    featured: true,
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
  name: "JCF Luxury Technical Quilted Jacket",
  price: 150.00, // Suggested premium price point
  colors: ['Black', 'Navy'], 
  gender: 'men',
  image: 'assets/jcf_tech_jacket.png',
  description: 'High-performance slim-fit tech jacket featuring a diamond-quilted chest panel, gold-embroidered JCF monogramming, and custom lion-crest hardware.',
  category: 'outerwear',
  style: 'technical jacket',
  featured: true,
},
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Royal Utility Legging",
    price: 115.0,
    colors: ['Black', 'Gold', 'White'],
    gender: 'women',
    image: 'assets/womens-royal-utility-legging-jcf.jpg',
    description: `The JCF Royal Utility Legging is the centerpiece of the women's collection, designed for those who demand high-fashion aesthetics without compromising on tactical functionality. 

Design & Fit
Royal Aesthetic: High-contrast White side paneling framed by luxury Gold piping for a sculpted, elite look.
Signature Waistband: Features a high-rise, V-tapered waistband with the Gold 'JCF' Crown logo centered for maximum style and support.

Key Features
Functional Security: Dual thigh-high utility pockets equipped with Gold-tone zippers to keep your tech and essentials secure.
Manifesto Branding: The lower left calf features the Lion/Owl split-face logo in Deep Red, paired with the 'just casual days' signature in Gold embroidery.
Hidden Storage: Includes an invisible pocket integrated into the rear waistband for discrete storage of keys or cards.

Materials & Care
Fabric: Elite-tier matte black compression fabric with a 4-way stretch for a perfect fit.
Care: Hand wash cold or use a delicate cycle; air dry only to maintain the vibrancy of the gold piping and specialized hardware.`,
    category: 'pants',
    style: 'leggings',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Royal Quilted Bomber",
    price: 165.0,
    colors: ['Black', 'Gold', 'White'],
    gender: 'women',
    image: 'assets/womens-royal-bomber-jcf.jpg',
    description: `The JCF Royal Quilted Bomber is the definitive outer layer for the women's 'Royal' series. Merging tactical protection with runway-ready aesthetics, this cropped bomber is designed to command attention while keeping your essentials secure.

Design & Fit
Cropped Luxury: A tailored, cropped silhouette designed to perfectly complement high-waisted leggings.
Signature Quilting: Premium diamond-quilted matte black panels across the chest and back for a sophisticated, textured look.

Key Features
Royal Hardware: Features a heavy-duty polished Gold-tone main zipper with a custom Lion/Owl split-face puller.
Security Storage: Two front-facing hand pockets with Gold-tone security zippers and an internal satin-lined 'vault' pocket.
High-Contrast Branding: Gold 'JCF' Crown logo on the chest and a massive embossed Lion/Owl motif on the rear panel.

Materials & Care
Fabric: Technical water-resistant nylon shell with a Deep Red luxury satin lining.
Care: Professional dry clean only to protect the specialized gold hardware and quilted stitching.`,
    category: 'outerwear',
    style: 'jacket',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Royal Curve Tee",
    price: 70.0,
    colors: ['Black', 'Gold'],
    gender: 'women',
    image: 'assets/womens-royal-curve-tee-jcf.png',
    description: `A sophisticated take on the essential performance tee. The Royal Curve Tee features a modest yet flattering neckline and an extended curved hem designed specifically for coverage and confidence during high-intensity movement.

Design & Fit
Coverage Focused: Signature longline curved hem provides elegant coverage for a seamless look with leggings.
Premium Texture: Crafted from our custom performance waffle-knit for maximum breathability and a luxury hand-feel.

Key Features
Hardware Detail: Features the signature Gold 'X' zipper at the neck with a custom Lion/Owl split-face puller.
Designer Branding: Gold 'JCF' Crown logo on the chest and the Lion/Owl 'just casual days' motif on the lower hip.
Interior Luxury: Deep Red contrast inner collar for a hidden touch of brand DNA.

Materials & Care
Fabric: Breathable Pima cotton-silk performance blend.
Care: Machine wash cold; tumble dry low. Protect the gold hardware by washing inside out.`,
    category: 'shirts',
    style: 't-shirt',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Royal Deep-V Curve Tee",
    price: 75.0,
    colors: ['Black', 'Gold'],
    gender: 'women',
    image: 'assets/womens-royal-deep-v-tee-jcf.png',
    description: `The bolder side of the Royal collection. The Deep-V Curve Tee combines a provocative plunging neckline with our signature utility features, creating a high-fashion silhouette that transitions perfectly from the gym to the city.

Design & Fit
Sculpted V-Neck: Features a deep-plunge neckline framed with luxury Gold piping and a functional half-zip.
Movement Slit: Includes a central front slit at the hem for enhanced mobility and a striking visual detail.

Key Features
Adjustable Hardware: Polished Gold-tone front zipper with the custom Lion/Owl hardware puller allows for adjustable coverage.
Elite Branding: High-contrast Gold 'JCF' Crown logo positioned on the left chest and tonal Deep Red 'just casual days' branding on the hip.
Signature Hem: Extended rear curved hem ensures the 'Secure & Stylish' promise remains intact.

Materials & Care
Fabric: Elite performance waffle-knit with 4-way stretch.
Care: Hand wash recommended to preserve the deep-V structure and gold hardware integrity.`,
    category: 'shirts',
    style: 't-shirt',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Royal Secure-Support Bra",
    price: 60.0,
    colors: ['Black', 'Gold'],
    gender: 'women',
    image: 'assets/womens-royal-sports-bra-jcf.png',
    description: `The JCF Royal Secure-Support Bra is engineered for high-intensity performance with a luxury aesthetic. By utilizing metallic compression materials instead of heavy hardware, this bra provides elite stability and a seamless, high-fashion look.

Design & Fit
High-Impact Support: Features a wide, high-tension elastic underband and metallic-reinforced straps for a secure, bounce-free fit.
Royal Detailing: Sleek Gold-metallic piping frames the silhouette, mirroring the design language of the Royal Utility Leggings.

Key Features
Technical Body: Constructed from our signature black waffle-knit performance fabric with a breathable, moisture-wicking Deep Red inner lining.
Designer Branding: Features a centered Gold 'JCF' Crown logo and a dual-branded Lion/Owl split-face motif on the underband for a cohesive collection look.
Comfort Straps: Flat-lay gold-metallic straps designed to provide maximum support without digging or chafing during movement.

Materials & Care
Fabric: 78% Polyester / 22% Spandex interlock with a Pima cotton-silk blend overlay.
Care: Machine wash cold in a mesh laundry bag; lay flat to dry to preserve the gold-foil metallic finish.`,
    category: 'shirts',
    style: 'sports-bra',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Royal Performance Headwrap",
    price: 35.0,
    colors: ['Black', 'Gold'],
    gender: 'women',
    image: 'assets/womens-royal-headwrap-jcf.png',
    description: `The JCF Royal Performance Headwrap is the ultimate fusion of hair protection and high-end style. Designed to stay secure during the most rigorous movements, this headwrap completes the Royal set with a touch of elegance.

Design & Fit
Hair-First Construction: Features a friction-reducing Deep Red silky interior lining to prevent breakage and frizz during workouts.
Secure Stay: Built with a high-tension, adjustable rear elastic that provides a personalized fit without the use of hair-snagging velcro.

Key Features
Elite Aesthetics: Accented with luxury Gold-metallic piping and a centered Gold 'JCF' Crown logo.
Technical Breathability: Outer layer consists of our signature moisture-wicking matte black performance fabric.
Signature Branding: Detailed with the Gold Lion/Owl split-face logo on the temple and 'just casual days' back embroidery.

Materials & Care
Fabric: Polyester-Spandex outer / Silk-Satin interior blend.
Care: Hand wash cold; air dry to protect the metallic foil and internal silk lining.`,
    category: 'accessories',
    style: 'headwear',
    featured: false,
  },
  // --- WOMENS COLLECTION: ICON SET ---

  {
    id: crypto.randomUUID(),
    name: "JCF Women's Icon Cropped Bomber",
    price: 130.0,
    colors: ['Black', 'Deep Maroon'],
    gender: 'women',
    image: 'assets/womens-icon-bomber-jcf.png',
    description: `The Icon Cropped Bomber defines the aesthetic of the JCF 'Subtle/Bold' series. This technical outerwear piece blends structured utility with sophisticated luxury branding.

Design & Fit
Subtle/Bold Aesthetic: A matte black performance shell contrasted by a precise Deep Maroon chest panel and underarm ventilation mesh.
Structured Silhouette: Features a strong, sculpted shoulder and a defined cropped hem that perfectly complements high-waisted leggings.

Key Features
Embossed Branding: A massive Lion/Owl split-face logo is precision embossed into the back panel, creating depth without heavy graphics.
Functional Security: Two front secure-zip hand pockets and a discrete satin internal stash pocket for high-value essentials.
Signature Hardwear: Finished with heavy-duty matte black zippers and ribbed performance cuffs.

Materials & Care
Fabric: Technical matte nylon shell with an anti-microbial deep red mesh lining.
Care: Machine wash cold; line dry. Protect the embossed branding and zippers.`,
    category: 'outerwear',
    style: 'jacket',
    featured: true,
  },
  {
    id: crypto.randomUUID(),
    name: "JCF Women's Icon High-Waisted Leggings",
    price: 90.0,
    colors: ['Black', 'Deep Maroon'],
    gender: 'women',
    image: 'assets/womens-icon-leggings-jcf.png',
    description: `The foundation of the JCF Women's line, the Icon Leggings are engineered to deliver compression, confidence, and covert utility.

Design & Fit
Secure Support: A 4-inch high-rise, V-tapered waistband provides elite comfort and support during complex movements.
Sculpted Piping: Contoured Deep Maroon piping defines the natural athletic silhouette of the legs and glutes.

Key Features
Iconic Embossing: Features a subtle yet prominent Lion/Owl split-face logo embossed onto the right hip.
Tactical Storage: An integrated side-thigh cargo pocket with a low-profile Deep Maroon zipper secures your phone or wallet.
Contour Seams: Sculpting flatlock seams reduce chafing and provide an architectural, 'second-skin' fit.

Materials & Care
Fabric: Premium high-density matte black interlock fabric.
Care: Machine wash cold; tumble dry low. Do not iron the embossed logo.`,
    category: 'pants',
    style: 'leggings',
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
  const defaultsByName = new Map(initialProducts.map((product) => [product.name, product]));

  const normalized = products
    .filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)))
    .map((product) => {
      const defaults = defaultsByName.get(product.name);
      const colors =
        Array.isArray(product.colors) && product.colors.length
          ? product.colors
          : Array.isArray(defaults?.colors) && defaults.colors.length
            ? defaults.colors
            : ['Black'];
      const sizes =
        Array.isArray(product.sizes) && product.sizes.length
          ? product.sizes
          : Array.isArray(defaults?.sizes) && defaults.sizes.length
            ? defaults.sizes
            : ['XS', 'S', 'M', 'L', 'XL'];

      return {
        ...defaults,
        ...product,
        colors,
        sizes,
        featured: product.featured === true || defaults?.featured === true,
        gender: product.gender || defaults?.gender || inferGender(product),
      };
    });

  const hasLatestCatalog =
    normalized.some((p) => p.name === 'JCF Relaxed Joggers') &&
    normalized.some((p) => p.name === "JCF Women's Yoga Shorts");

  return hasLatestCatalog ? normalized : initialProducts;
}

const state = {
  products: normalizeProducts(load('jcf_products', initialProducts)),
  cart: load('jcf_cart', []).map((line) => ({
    ...line,
    size: line?.size || null,
    color: line?.color || null,
  })),
  customer: load('jcf_customer', null),
  customerHistory: [],
  adminToken: load('jcf_admin_token', ''),
  adminAuth: Boolean(load('jcf_admin_token', '')),
  selectedProductId: null,
  selectedColor: '',
  selectedSize: '',
  appliedPromoCode: load('jcf_promo_code', ''),
  activeCatalogView: 'men-products',
};

const PROMO_CODE = 'jcf-fall';
const PROMO_RATE = 0.2;
const runtimeApiBase =
  (window.APP_CONFIG && window.APP_CONFIG.apiBase) ||
  document.querySelector('meta[name="api-base"]')?.content ||
  '';
const API_BASE =
  runtimeApiBase ||
  `${window.location.protocol}//${window.location.hostname}:4000/api`;

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
const adminProducts = document.getElementById('admin-products');
const detailName = document.getElementById('detail-name');
const detailPrice = document.getElementById('detail-price');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');
const detailAddButton = document.getElementById('detail-add-to-cart');
const detailColor = document.getElementById('detail-color');
const detailSize = document.getElementById('detail-size');
const cartNavButton = document.querySelector('.cart-nav-btn');
const detailBackButton = document.getElementById('detail-back');
const featuredGrid = document.getElementById('featured-grid');
const joinEmailButtons = [...document.querySelectorAll('.join-email-btn')];
const promoModal = document.getElementById('promo-modal');
const promoForm = document.getElementById('promo-form');
const promoEmail = document.getElementById('promo-email');
const promoCodeInput = document.getElementById('promo-code-input');
const applyPromoButton = document.getElementById('apply-promo');
const promoFeedback = document.getElementById('promo-feedback');
const orderHistory = document.getElementById('order-history');
const loginToggleButton = document.getElementById('login-toggle');
const logoutToggleButton = document.getElementById('logout-toggle');
const accountMenu = document.getElementById('account-menu');
const accountProfileForm = document.getElementById('account-profile-form');
const accountNameInput = document.getElementById('account-name');
const accountEmailInput = document.getElementById('account-email');
const accountPhoneMenuInput = document.getElementById('account-phone');
const accountAddressInput = document.getElementById('account-address');
const accountShippingAddressInput = document.getElementById('account-shipping-address');
const supportForm = document.getElementById('support-form');
const supportSubjectInput = document.getElementById('support-subject');
const supportMessageInput = document.getElementById('support-message');
const customerNameInput = document.getElementById('customer-name');
const customerPhoneInput = document.getElementById('customer-phone');
const customerCodeInput = document.getElementById('customer-code');
const customerAuthFeedback = document.getElementById('customer-auth-feedback');
const customerSendCodeButton = document.getElementById('customer-send-code');
const customerVerifyButton = document.getElementById('customer-verify-btn');
let productImageManifest = {};

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => setView(btn.dataset.view));
});
document.querySelectorAll('.account-link').forEach((btn) => {
  btn.addEventListener('click', () => closeAccountMenu());
});
document.querySelectorAll('.back-shopping-btn').forEach((btn) => {
  btn.addEventListener('click', () => setView(state.activeCatalogView || 'featured-products'));
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

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (modal.id === 'customer-login-modal') {
    if (customerCodeInput) {
      customerCodeInput.value = '';
    }
    setCustomerAuthFeedback('', false);
  }
}

function closeAccountMenu() {
  if (!accountMenu) return;
  accountMenu.classList.add('hidden');
  accountMenu.setAttribute('aria-hidden', 'true');
}

function openAccountMenu() {
  if (!accountMenu) return;
  accountMenu.classList.remove('hidden');
  accountMenu.setAttribute('aria-hidden', 'false');
}

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) closeModal(modal);
  });
});

function setView(id) {
  if (id === 'product-detail' && !state.selectedProductId) {
    id = state.activeCatalogView;
  }

  if (id === 'men-products' || id === 'women-products' || id === 'unisex-products') {
    state.activeCatalogView = id;
  }

  if (id === 'admin' && !state.adminAuth) {
    openModal(adminModal);
    return;
  }

  if ((id === 'account-orders' || id === 'account-details') && !state.customer) {
    openModal(customerModal);
    return;
  }

  views.forEach((view) => view.classList.toggle('active', view.id === id));
  if (id !== 'account-orders' && id !== 'account-details') closeAccountMenu();
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

function load(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

function save() {
  localStorage.setItem('jcf_products', JSON.stringify(state.products));
  localStorage.setItem('jcf_cart', JSON.stringify(state.cart));
  localStorage.setItem('jcf_customer', JSON.stringify(state.customer));
  localStorage.setItem('jcf_promo_code', JSON.stringify(state.appliedPromoCode));
}

function saveAdminSession(token) {
  state.adminToken = token;
  state.adminAuth = Boolean(token);
  localStorage.setItem('jcf_admin_token', token || '');
}

function clearAdminSession() {
  state.adminToken = '';
  state.adminAuth = false;
  localStorage.removeItem('jcf_admin_token');
}

function setCustomerAuthFeedback(message, ok = false) {
  if (!customerAuthFeedback) return;
  customerAuthFeedback.textContent = message;
  customerAuthFeedback.style.color = ok ? '#2e7d32' : '#b30000';
}

function renderCustomerButton() {
  if (!loginToggleButton) return;
  if (state.customer?.name || state.customer?.email) {
    const rawName = String(state.customer?.name || String(state.customer?.email || '').split('@')[0] || '').trim();
    const firstName = rawName.split(/\s+/)[0] || 'User';
    const label = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    loginToggleButton.textContent = `Hello, ${label}`;
    if (logoutToggleButton) logoutToggleButton.classList.remove('hidden');
    if (accountEmailInput) accountEmailInput.value = state.customer?.email || '';
    if (accountNameInput) accountNameInput.value = state.customer?.name || '';
    if (accountPhoneMenuInput) accountPhoneMenuInput.value = state.customer?.phone || '';
    if (accountAddressInput) accountAddressInput.value = state.customer?.address || '';
    if (accountShippingAddressInput) accountShippingAddressInput.value = state.customer?.shippingAddress || '';
    return;
  }
  loginToggleButton.textContent = 'Customer Login';
  if (logoutToggleButton) logoutToggleButton.classList.add('hidden');
  closeAccountMenu();
}

function renderOrderHistory() {
  if (!orderHistory) return;
  if (!state.customer) {
    orderHistory.innerHTML = '';
    return;
  }

  const history = Array.isArray(state.customerHistory) ? state.customerHistory : [];
  if (!history.length) {
    orderHistory.innerHTML = `
      <div class="order-line">
        <strong>Order History</strong>
        <p class="hint">No orders yet for ${state.customer.email}.</p>
      </div>
    `;
    return;
  }

  orderHistory.innerHTML = `
    <div class="order-line"><strong>Order History</strong></div>
    ${history
      .slice(0, 10)
      .map(
        (order) => `
      <div class="order-line">
        <p><strong>${order.id}</strong> - ${new Date(order.createdAt).toLocaleString()}</p>
        <p>Total: ${money(Number(order.total || 0))}</p>
      </div>
    `
      )
      .join('')}
  `;

}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function parseListInput(value, fallback = []) {
  const items = String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  return items.length ? items : fallback;
}

async function apiRequest(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  const response = await fetch(`${API_BASE}${path}`, {
    headers,
    ...options
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    if (response.status === 401 && path.startsWith('/admin/')) {
      clearAdminSession();
    }
    throw new Error(data?.message || 'Request failed');
  }

  return data;
}

async function loadProductsFromApi() {
  try {
    const products = await apiRequest('/products');
    state.products = normalizeProducts(products);
    save();
    renderProducts();
    renderAdminProducts();
    renderProductDetail();
  } catch {
    // Keep local data if backend is unavailable.
  }
}

async function loadCustomerHistory() {
  if (!state.customer?.email) {
    state.customerHistory = [];
    renderOrderHistory();
    return;
  }

  try {
    const history = await apiRequest(`/customers/${encodeURIComponent(state.customer.email)}/history`);
    if (history?.customer) {
      state.customer = { ...state.customer, ...history.customer };
      save();
    }
    state.customerHistory = Array.isArray(history?.orders) ? history.orders : [];
  } catch {
    state.customerHistory = [];
  }
  renderCustomerButton();
  renderOrderHistory();
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getPromoDiscount(subtotal) {
  if (state.appliedPromoCode !== PROMO_CODE) return 0;
  return subtotal * PROMO_RATE;
}

function setPromoFeedback(message, ok) {
  if (!promoFeedback) return;
  promoFeedback.textContent = message;
  promoFeedback.style.color = ok ? '#2e7d32' : '#b30000';
}

function syncPromoUi() {
  if (promoCodeInput) promoCodeInput.value = state.appliedPromoCode || '';
  if (state.appliedPromoCode === PROMO_CODE) {
    setPromoFeedback('Promo applied: 20% off your order.', true);
  } else {
    setPromoFeedback('', false);
  }
}

function getProductImageForColor(product, color) {
  const direct = productImageManifest?.[product.name];
  if (direct && direct[color]) return direct[color];

  // Fallback key matching when product names vary slightly.
  const normalized = product.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matchedKey = Object.keys(productImageManifest).find(
    (key) => key.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized
  );
  if (matchedKey && productImageManifest[matchedKey]?.[color]) {
    return productImageManifest[matchedKey][color];
  }

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
  if (!detailName || !detailPrice || !detailImage || !detailDescription || !detailAddButton || !detailColor || !detailSize) return;

  const product = state.products.find((item) => item.id === state.selectedProductId);
  if (!product) return;

  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ['Black'];
  const sizes = Array.isArray(product.sizes) && product.sizes.length ? product.sizes : ['XS', 'S', 'M', 'L', 'XL'];
  if (!colors.includes(state.selectedColor)) {
    state.selectedColor = colors[0];
  }
  if (!sizes.includes(state.selectedSize)) {
    state.selectedSize = '';
  }

  detailColor.innerHTML = colors.map((color) => `<option value="${color}">${color}</option>`).join('');
  detailColor.value = state.selectedColor;
  detailSize.innerHTML = [
    '<option value="">Select size</option>',
    ...sizes.map((size) => `<option value="${size}">${size}</option>`),
  ].join('');
  detailSize.value = state.selectedSize;

  detailName.textContent = product.name;
  detailPrice.textContent = money(product.price);
  detailImage.src = getProductImageForColor(product, state.selectedColor);
  detailImage.alt = product.name;
  detailImage.style.filter = 'none';
  detailDescription.textContent = `${product.name} is built for everyday comfort, movement, and clean street-ready style.`;
  detailAddButton.setAttribute('onclick', `addToCart('${product.id}')`);
  bindMagnifiers(document.getElementById('product-detail'));
}

window.openProduct = (productId, sourceView = 'men-products') => {
  state.activeCatalogView = sourceView;
  if (state.selectedProductId !== productId) {
    state.selectedColor = '';
    state.selectedSize = '';
  }
  state.selectedProductId = productId;
  renderProductDetail();
  setView('product-detail');
};

window.addToCart = (productId) => {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;

  const color = state.selectedProductId === productId ? state.selectedColor || null : null;
  const size = state.selectedProductId === productId ? state.selectedSize || null : null;
  if (!size) {
    alert('Please select a size before adding to cart.');
    return;
  }
  const line = state.cart.find(
    (item) =>
      item.id === productId &&
      (item.color || null) === color &&
      (item.size || null) === size
  );

  if (line) {
    line.qty += 1;
  } else {
    state.cart.push({ id: product.id, name: product.name, color, size, price: product.price, qty: 1 });
  }

  save();
  renderCart();
};

window.removeFromCart = (productId, color = null, size = null) => {
  state.cart = state.cart.filter(
    (item) =>
      !(
        item.id === productId &&
        (item.color || null) === (color || null) &&
        (item.size || null) === (size || null)
      )
  );
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
          ${item.size ? `<p>Size: ${item.size}</p>` : ''}
          <p>${money(item.price)} x ${item.qty}</p>
        </div>
        <button class="ghost" onclick="removeFromCart('${item.id}', ${item.color ? `'${item.color}'` : 'null'}, ${item.size ? `'${item.size}'` : 'null'})">Remove</button>
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
    <div class="admin-item" data-id="${item.id}">
      <div>
        <strong>${item.name}</strong>
        <p>${money(item.price)}</p>
      </div>
      <div class="admin-item-form">
        <input data-field="name" value="${item.name}" placeholder="Name" />
        <input data-field="price" type="number" min="1" step="0.01" value="${item.price}" placeholder="Price" />
        <select data-field="gender">
          <option value="men" ${item.gender === 'men' ? 'selected' : ''}>Men</option>
          <option value="women" ${item.gender === 'women' ? 'selected' : ''}>Women</option>
          <option value="unisex" ${item.gender === 'unisex' ? 'selected' : ''}>Unisex</option>
        </select>
        <input data-field="colors" value="${(item.colors || []).join(', ')}" placeholder="Colors (comma separated)" />
        <input data-field="sizes" value="${(item.sizes || ['XS', 'S', 'M', 'L', 'XL']).join(', ')}" placeholder="Sizes (comma separated)" />
        <input data-field="image" value="${item.image || ''}" placeholder="Image URL/Data URL" />
        <input data-field="category" value="${item.category || ''}" placeholder="Category" />
        <input data-field="style" value="${item.style || ''}" placeholder="Style" />
        <label><input data-field="featured" type="checkbox" ${item.featured ? 'checked' : ''} /> Featured</label>
        <textarea data-field="description" rows="2" placeholder="Description">${item.description || ''}</textarea>
      </div>
      <div class="row admin-item-actions">
        <button class="secondary" onclick="saveProductEdits('${item.id}')">Save Item</button>
        <button class="ghost" onclick="deleteProduct('${item.id}')">Delete</button>
      </div>
    </div>
  `
    )
    .join('');
}

window.deleteProduct = async (id) => {
  const applyDelete = () => {
    state.products = state.products.filter((item) => item.id !== id);
    state.cart = state.cart.filter((item) => item.id !== id);
    if (state.selectedProductId === id) {
      state.selectedProductId = null;
      state.selectedSize = '';
      state.selectedColor = '';
    }
    save();
    renderProducts();
    renderCart();
    renderAdminProducts();
    renderProductDetail();
  };

  try {
    await apiRequest(`/admin/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${state.adminToken}` }
    });
    applyDelete();
  } catch (error) {
    alert(error?.message || 'Unable to delete product.');
  }
};

window.saveProductEdits = async (id) => {
  const item = state.products.find((p) => p.id === id);
  const container = document.querySelector(`.admin-item[data-id="${id}"]`);
  if (!item || !container) return;

  const getField = (name) => container.querySelector(`[data-field="${name}"]`);
  const nextPrice = Number(getField('price')?.value);
  const name = getField('name')?.value?.trim() || item.name;
  const image = getField('image')?.value?.trim() || item.image;
  const colors = parseListInput(getField('colors')?.value, ['Black']);
  const sizes = parseListInput(getField('sizes')?.value, ['XS', 'S', 'M', 'L', 'XL']);
  const gender = getField('gender')?.value || item.gender || 'men';
  const description = getField('description')?.value?.trim() || '';
  const category = getField('category')?.value?.trim() || '';
  const style = getField('style')?.value?.trim() || '';
  const featured = Boolean(getField('featured')?.checked);

  if (!Number.isFinite(nextPrice) || nextPrice <= 0) return;
  if (!sizes.length) {
    alert('Each item must have at least one size.');
    return;
  }

  const updated = {
    ...item,
    name,
    price: nextPrice,
    image,
    colors,
    sizes,
    gender,
    description,
    category,
    style,
    featured,
  };

  try {
    const persisted = await apiRequest(`/admin/products/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${state.adminToken}` },
      body: JSON.stringify(updated),
    });
    Object.assign(item, persisted);
  } catch (error) {
    alert(error?.message || 'Unable to save product changes.');
    return;
  }

  state.cart = state.cart.map((line) => {
    if (line.id !== id) return line;
    const nextColor = updated.colors.includes(line.color) ? line.color : updated.colors[0] || null;
    const nextSize = updated.sizes.includes(line.size) ? line.size : updated.sizes[0] || null;
    return { ...line, name: updated.name, price: updated.price, color: nextColor, size: nextSize };
  });

  save();
  renderProducts();
  renderCart();
  renderAdminProducts();
  renderProductDetail();
};

const adminProductForm = document.getElementById('admin-product-form');
adminProductForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('admin-name').value.trim();
  const price = Number(document.getElementById('admin-price').value);
  const imageUrl = document.getElementById('admin-image').value.trim();
  const imageFileInput = document.getElementById('admin-image-file');
  const file = imageFileInput?.files?.[0] || null;

  let image = imageUrl;
  if (file) {
    try {
      image = await readFileAsDataUrl(file);
    } catch {
      alert('Unable to read selected image file.');
      return;
    }
  }
  if (!image) {
    alert('Add an image URL or upload an image file.');
    return;
  }

  const draftProduct = {
    name,
    price,
    image,
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'New product added by admin.',
    category: 'tops',
    style: 'standard',
    featured: false
  };

  try {
    const created = await apiRequest('/admin/products', {
      method: 'POST',
      headers: { Authorization: `Bearer ${state.adminToken}` },
      body: JSON.stringify(draftProduct)
    });
    state.products.unshift(created);
  } catch (error) {
    alert(error?.message || 'Unable to add product.');
    return;
  }

  adminProductForm.reset();
  save();
  renderProducts();
  renderAdminProducts();
});

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read image file.'));
    reader.readAsDataURL(file);
  });
}

const customerModal = document.getElementById('customer-login-modal');
const adminModal = document.getElementById('admin-login-modal');
const brandLogo = document.querySelector('.brand-logo');
const adminToggle = document.getElementById('admin-toggle');
let adminLogoClicks = 0;
let adminRevealTimer = null;

if (loginToggleButton) {
  loginToggleButton.addEventListener('click', () => {
    if (!state.customer) {
      openModal(customerModal);
      return;
    }
    if (accountMenu?.classList.contains('hidden')) {
      openAccountMenu();
    } else {
      closeAccountMenu();
    }
  });
}
if (logoutToggleButton) {
  logoutToggleButton.addEventListener('click', () => {
    state.customer = null;
    state.customerHistory = [];
    state.appliedPromoCode = '';
    localStorage.removeItem('jcf_pending_order');
    save();
    syncPromoUi();
    renderCustomerButton();
    renderOrderHistory();
    closeAccountMenu();
    alert('You have been logged out.');
  });
}
adminToggle.addEventListener('click', () => openModal(adminModal));

document.addEventListener('click', (event) => {
  if (!accountMenu || accountMenu.classList.contains('hidden')) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  const insideActions = target.closest('.actions');
  if (!insideActions) closeAccountMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAccountMenu();
});

if (accountProfileForm) {
  accountProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!state.customer?.email) return;

    const payload = {
      name: accountNameInput?.value?.trim() || '',
      phone: accountPhoneMenuInput?.value?.trim() || '',
      address: accountAddressInput?.value?.trim() || '',
      shippingAddress: accountShippingAddressInput?.value?.trim() || ''
    };

    try {
      const result = await apiRequest(`/customers/${encodeURIComponent(state.customer.email)}/profile`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      state.customer = result?.customer || { ...state.customer, ...payload };
      save();
      renderCustomerButton();
      alert('Profile updated.');
    } catch (error) {
      alert(error?.message || 'Unable to update profile.');
    }
  });
}

if (supportForm) {
  supportForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = state.customer?.email || '';
    const name = state.customer?.name || '';
    const subject = supportSubjectInput?.value?.trim() || '';
    const message = supportMessageInput?.value?.trim() || '';

    if (!email || !message) {
      alert('Please login and enter a support message.');
      return;
    }

    try {
      await apiRequest('/support/messages', {
        method: 'POST',
        body: JSON.stringify({ email, name, subject, message })
      });
      supportForm.reset();
      alert('Support message sent to jcfitsco@gmail.com.');
    } catch (error) {
      alert(error?.message || 'Unable to send support message.');
    }
  });
}

joinEmailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (promoModal) openModal(promoModal);
  });
});

if (promoForm) {
  promoForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = promoEmail.value.trim().toLowerCase();
    if (!email) return;

    try {
      await apiRequest('/email-signups', {
        method: 'POST',
        body: JSON.stringify({ email })
      });
    } catch {
      const existing = load('jcf_email_list', []);
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('jcf_email_list', JSON.stringify(existing));
      }
    }

    promoForm.reset();
    closeModal(promoModal);
    alert('You are in. Use promo code jcf-fall in cart for 20% off.');
  });
}

if (applyPromoButton) {
  applyPromoButton.addEventListener('click', async () => {
    const entered = (promoCodeInput?.value || '').trim().toLowerCase();

    try {
      const promo = await apiRequest(`/promos/${encodeURIComponent(entered)}`);
      state.appliedPromoCode = promo?.valid ? entered : '';
      save();
      if (promo?.valid) {
        setPromoFeedback('Promo applied: 20% off your order.', true);
      } else {
        setPromoFeedback('Invalid code. Try jcf-fall.', false);
      }
    } catch {
      if (entered === PROMO_CODE) {
        state.appliedPromoCode = PROMO_CODE;
        save();
        setPromoFeedback('Promo applied: 20% off your order.', true);
      } else {
        state.appliedPromoCode = '';
        save();
        setPromoFeedback('Invalid code. Try jcf-fall.', false);
      }
    }

  });
}

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

if (detailSize) {
  detailSize.addEventListener('change', () => {
    state.selectedSize = detailSize.value;
  });
}

if (customerSendCodeButton) {
  customerSendCodeButton.addEventListener('click', async () => {
    const email = document.getElementById('customer-email').value.trim().toLowerCase();
    const name = customerNameInput?.value.trim() || '';
    const phone = customerPhoneInput?.value.trim() || '';
    if (!email) {
      setCustomerAuthFeedback('Enter your email first.');
      return;
    }

    try {
      const result = await apiRequest('/auth/request-code', {
        method: 'POST',
        body: JSON.stringify({ email, name, phone })
      });
      if (result?.devCode) {
        if (customerCodeInput) customerCodeInput.value = String(result.devCode);
        setCustomerAuthFeedback(`Dev mode code: ${result.devCode}`, true);
      } else {
        setCustomerAuthFeedback('Verification code sent to your email.', true);
      }
      alert('Verification code sent. Enter the code and click Verify & Login.');
    } catch (error) {
      setCustomerAuthFeedback(error?.message || 'Unable to send code.');
      alert(error?.message || 'Unable to send code.');
    }
  });
}

document.getElementById('customer-login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('customer-email').value.trim().toLowerCase();
  const code = customerCodeInput?.value.trim() || '';
  const name = customerNameInput?.value.trim() || '';
  const phone = customerPhoneInput?.value.trim() || '';

  if (!email || !code) {
    setCustomerAuthFeedback('Enter email and verification code.');
    return;
  }

  try {
    setCustomerAuthFeedback('Verifying code...', true);
    const result = await apiRequest('/auth/verify-code', {
      method: 'POST',
      body: JSON.stringify({ email, code, name, phone })
    });
    state.customer = result.customer;
    save();
    closeModal(customerModal);
    setCustomerAuthFeedback('', true);
    renderCustomerButton();
    await loadCustomerHistory();
    alert(`Welcome ${state.customer.name}`);
  } catch (error) {
    setCustomerAuthFeedback(error?.message || 'Unable to verify code.');
    alert(error?.message || 'Unable to verify code.');
  }
});

document.getElementById('admin-login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('admin-email').value.trim();
  const password = document.getElementById('admin-password').value.trim();

  try {
    const result = await apiRequest('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (result?.ok && result?.token) {
      saveAdminSession(result.token);
      closeModal(adminModal);
      setView('admin');
      return;
    }
    clearAdminSession();
    alert('Admin login failed.');
  } catch (error) {
    clearAdminSession();
    alert(error?.message || 'Invalid admin credentials');
  }
});

async function beginStripeCheckout() {
  if (!state.cart.length) {
    alert('Add items to your cart first.');
    return false;
  }
  if (state.cart.some((item) => !item.size)) {
    alert('Each cart item must have a size selected before checkout.');
    return false;
  }

  if (!state.customer) {
    openModal(customerModal);
    return false;
  }

  try {
    const session = await apiRequest('/payments/checkout-session', {
      method: 'POST',
      body: JSON.stringify({
        cart: state.cart,
        promoCode: state.appliedPromoCode,
        customerEmail: state.customer?.email || '',
        customerPhone: state.customer?.phone || ''
      })
    });

    if (!session?.url) {
      alert('Unable to start Stripe checkout.');
      return;
    }

    localStorage.setItem(
      'jcf_pending_order',
      JSON.stringify({
        customerEmail: state.customer?.email || '',
        customerPhone: state.customer?.phone || '',
        cart: state.cart,
        promoCode: state.appliedPromoCode
      })
    );

    window.location.href = session.url;
    return true;
  } catch (error) {
    alert(error?.message || 'Unable to start Stripe checkout.');
    return false;
  }
}

document.getElementById('start-checkout').addEventListener('click', () => {
  beginStripeCheckout();
});

renderProducts();
renderCart();
renderAdminProducts();
renderProductDetail();
syncPromoUi();
renderCustomerButton();
loadCustomerHistory();
loadProductsFromApi();
handlePaymentStatusFromUrl();

async function handlePaymentStatusFromUrl() {
  const paymentStatus = new URLSearchParams(window.location.search).get('payment');
  const paymentSessionId = new URLSearchParams(window.location.search).get('session_id') || '';

  if (paymentStatus === 'success') {
    let orderMessage = 'Payment successful. Your order is being finalized.';

    const pendingRaw = localStorage.getItem('jcf_pending_order');
    const pending = pendingRaw ? JSON.parse(pendingRaw) : null;
    const email = pending?.customerEmail || state.customer?.email || '';

    if (paymentSessionId && email) {
      let confirmedOrder = null;
      for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
          const history = await apiRequest(`/customers/${encodeURIComponent(email)}/history`);
          const orders = Array.isArray(history?.orders) ? history.orders : [];
          confirmedOrder = orders.find((order) => String(order?.stripeSessionId || '') === paymentSessionId) || null;
          if (confirmedOrder) break;
        } catch {
          // Retry briefly to allow webhook processing.
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
      }

      if (confirmedOrder?.id) {
        orderMessage = `Payment successful. Order ${confirmedOrder.id} confirmed.`;
      } else {
        orderMessage = 'Payment successful. Order confirmation may take a moment; refresh order history shortly.';
      }
    }

    localStorage.removeItem('jcf_pending_order');
    state.cart = [];
    state.appliedPromoCode = '';
    save();
    renderCart();
    syncPromoUi();
    await loadCustomerHistory();
    setView(state.activeCatalogView);
    alert(orderMessage);
    return;
  }

  if (paymentStatus === 'cancel') {
    alert('Payment canceled. Your cart is still saved.');
  }
}

fetch('assets/product-image-manifest.json')
  .then((response) => (response.ok ? response.json() : {}))
  .then((data) => {
    productImageManifest = data || {};
    renderProducts();
    renderProductDetail();
  })
  .catch(() => {});
