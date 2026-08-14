/**
 * ============================================================================
 *  PRODUCT CATALOGUE
 * ============================================================================
 *  Every product on the site is generated from this single array. To add a
 *  product, append a new object; to remove one, delete it. Nothing else in the
 *  codebase needs to change.
 *
 *  Field guide
 *  -----------
 *  id          — unique string identifier
 *  slug        — used in the URL: /products/<slug>
 *  name        — display name
 *  category    — a category `id` from categories.js
 *  shortDesc   — one or two lines shown on cards
 *  description — full description shown on the product detail page
 *  images      — placeholder paths; replace with the client's real photos
 *  material    — primary material(s)
 *  sizes       — available sizes
 *  colors      — available colourways (name + hex for the swatch)
 *  features    — bullet list of key features
 *  featured    — show on the home page "Featured Products" section
 *  customizable — whether customisation / branding is available
 * ============================================================================
 */

export const products = [
  {
    id: "classic-canvas-tote",
    slug: "classic-canvas-tote",
    name: "Classic Canvas Tote",
    category: "tote-bags",
    shortDescription:
      "A hard-wearing everyday tote in natural cotton canvas with reinforced handles.",
    description:
      "Our Classic Canvas Tote is a dependable everyday companion, cut from heavyweight natural cotton canvas with double-stitched seams and reinforced handles. Generous enough for groceries, work essentials or a weekend market run, it is built to be carried every single day.",
    images: [
      "/images/categories/tote-bags.jpg",
      "/images/categories/custom-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Heavyweight cotton canvas (12 oz)",
    sizes: ["Small", "Medium", "Large"],
    colors: [
      { name: "Natural", hex: "#e7dcc8" },
      { name: "Charcoal", hex: "#3c3a38" },
      { name: "Olive", hex: "#6b6b4a" },
    ],
    features: [
      "Heavyweight, long-wearing cotton canvas",
      "Reinforced stitching and handles",
      "Spacious main compartment",
      "Machine washable",
    ],
    featured: true,
    customizable: true,
    customizationNote:
      "Available in custom colours with screen-printing or embroidery of your logo.",
  },
  {
    id: "premium-leather-tote",
    slug: "premium-leather-tote",
    name: "Premium Leather Tote",
    category: "tote-bags",
    shortDescription:
      "A refined leather tote with clean lines and a structured, polished finish.",
    description:
      "The Premium Leather Tote pairs clean, structured design with a soft natural finish. Suitable for professionals and gifting alike, it features a roomy lined interior, secure top closure and subtle hardware that elevates any outfit.",
    images: [
      "/images/categories/tote-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Genuine leather with cotton lining",
    sizes: ["Medium", "Large"],
    colors: [
      { name: "Tan", hex: "#b07a4f" },
      { name: "Brown", hex: "#5f3a22" },
      { name: "Black", hex: "#262524" },
    ],
    features: [
      "Soft, premium leather finish",
      "Cotton-lined interior with zip pocket",
      "Magnetic snap closure",
      "Comfortable padded handles",
    ],
    featured: true,
    customizable: true,
    customizationNote:
      "Debossed or foil-stamped branding available for corporate gifting.",
  },
  {
    id: "jute-shopping-bag",
    slug: "jute-shopping-bag",
    name: "Jute Shopping Bag",
    category: "shopping-bags",
    shortDescription:
      "A sturdy, eco-friendly jute bag built for heavy, everyday grocery loads.",
    description:
      "A sustainable alternative to single-use bags, our Jute Shopping Bag is woven from durable natural jute with strong cotton handles. It comfortably carries heavy grocery loads and folds neatly for storage in the car or kitchen.",
    images: [
      "/images/categories/shopping-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Natural jute with cotton handles",
    sizes: ["Standard", "Large"],
    colors: [
      { name: "Natural", hex: "#d8c49a" },
      { name: "Tan", hex: "#c09a63" },
    ],
    features: [
      "Eco-friendly natural jute weave",
      "Strong, reinforced cotton handles",
      "High load capacity",
      "Folds flat for easy storage",
    ],
    featured: true,
    customizable: true,
    customizationNote: "Printed branding available on the front panel.",
  },
  {
    id: "foldable-shopping-bag",
    slug: "foldable-shopping-bag",
    name: "Foldable Shopping Bag",
    category: "shopping-bags",
    shortDescription:
      "A compact, packable shopping bag that folds into its own pouch.",
    description:
      "Keep one in every bag and glove box. The Foldable Shopping Bag packs into its own small pouch yet opens into a full-size carry bag, making it the perfect zero-hassle companion for unplanned shopping trips.",
    images: [
      "/images/categories/shopping-bags.jpg",
      "/images/gallery/materials.jpg",
    ],
    material: "Ripstop polyester",
    sizes: ["One Size"],
    colors: [
      { name: "Sand", hex: "#d6c7ae" },
      { name: "Teal", hex: "#3f6f68" },
      { name: "Charcoal", hex: "#3c3a38" },
    ],
    features: [
      "Folds into an attached pouch",
      "Lightweight ripstop fabric",
      "Reinforced bottom seams",
      "Wipe-clean surface",
    ],
    featured: false,
    customizable: true,
  },
  {
    id: "sports-drawstring-bag",
    slug: "sports-drawstring-bag",
    name: "Sports Drawstring Bag",
    category: "drawstring-bags",
    shortDescription:
      "A lightweight, cinch-top drawstring bag for the gym, sports and events.",
    description:
      "Simple, secure and incredibly light, the Sports Drawstring Bag is the go-to for the gym, team kits and event giveaways. The cinch-top closure doubles as shoulder straps, and a front zip pocket keeps small essentials close.",
    images: [
      "/images/categories/drawstring-bags.jpg",
      "/images/categories/custom-bags.jpg",
    ],
    material: "Polyester with cotton cords",
    sizes: ["Standard"],
    colors: [
      { name: "Charcoal", hex: "#3c3a38" },
      { name: "Navy", hex: "#2c3a52" },
      { name: "Red", hex: "#a63a34" },
    ],
    features: [
      "Cinch-top closure with carry straps",
      "Front zip pocket",
      "Breathable, quick-dry fabric",
      "Great for branding and giveaways",
    ],
    featured: true,
    customizable: true,
    customizationNote: "Popular for schools, clubs and event merchandising.",
  },
  {
    id: "cotton-drawstring-pouch",
    slug: "cotton-drawstring-pouch",
    name: "Cotton Drawstring Pouch",
    category: "drawstring-bags",
    shortDescription:
      "A soft cotton pouch for gifts, packaging and everyday organisation.",
    description:
      "A versatile soft pouch with a secure drawstring closure, ideal for product packaging, gifting, cosmetics or organising smaller items. Made from breathable cotton with a neat finish.",
    images: [
      "/images/categories/drawstring-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "100% cotton",
    sizes: ["Small", "Medium", "Large"],
    colors: [
      { name: "Natural", hex: "#e7dcc8" },
      { name: "White", hex: "#f5f2ec" },
    ],
    features: [
      "Soft natural cotton",
      "Secure drawstring closure",
      "Multiple size options",
      "Suitable for packaging and gifting",
    ],
    featured: false,
    customizable: true,
  },
  {
    id: "weekender-duffel",
    slug: "weekender-duffel",
    name: "Weekender Duffel",
    category: "travel-bags",
    shortDescription:
      "A spacious canvas-and-leather duffel for short trips and the gym.",
    description:
      "The Weekender Duffel blends durable canvas with leather trim for a travel bag that looks as good as it performs. A wide opening, generous capacity and comfortable carry options make it ideal for weekend escapes and the gym alike.",
    images: [
      "/images/categories/travel-bags.jpg",
      "/images/branding/hero.jpg",
      "/images/gallery/materials.jpg",
    ],
    material: "Cotton canvas with leather trim",
    sizes: ["Medium", "Large"],
    colors: [
      { name: "Olive", hex: "#6b6b4a" },
      { name: "Tan", hex: "#b07a4f" },
      { name: "Charcoal", hex: "#3c3a38" },
    ],
    features: [
      "Durable canvas with leather trim",
      "Wide main compartment",
      "Removable shoulder strap",
      "Internal zip pockets",
    ],
    featured: true,
    customizable: true,
  },
  {
    id: "travel-organizer-set",
    slug: "travel-organizer-set",
    name: "Travel Organizer Set",
    category: "travel-bags",
    shortDescription:
      "A set of packing organisers to keep luggage tidy on every trip.",
    description:
      "A coordinated set of lightweight packing organisers designed to separate clothing, footwear and accessories. Keep luggage tidy and unpacking effortless wherever the journey takes you.",
    images: [
      "/images/categories/travel-bags.jpg",
      "/images/categories/shopping-bags.jpg",
    ],
    material: "Water-resistant nylon",
    sizes: ["3-piece set"],
    colors: [
      { name: "Grey", hex: "#8a8784" },
      { name: "Navy", hex: "#2c3a52" },
    ],
    features: [
      "Set of three organisers",
      "Water-resistant fabric",
      "Mesh ventilation panels",
      "Lightweight and packable",
    ],
    featured: false,
    customizable: true,
  },
  {
    id: "yoga-mat-tote",
    slug: "yoga-mat-tote",
    name: "Yoga Mat Tote",
    category: "yoga-bags",
    shortDescription:
      "A soft carry bag that fits a yoga mat and everyday essentials.",
    description:
      "Designed for the studio and beyond, the Yoga Mat Tote holds a standard yoga mat with room to spare for a water bottle, towel and valuables. A comfortable shoulder strap and easy-access pockets keep your practice seamless.",
    images: [
      "/images/categories/yoga-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Cotton canvas with cotton lining",
    sizes: ["One Size"],
    colors: [
      { name: "Sage", hex: "#9db2a2" },
      { name: "Sand", hex: "#d6c7ae" },
    ],
    features: [
      "Fits most standard yoga mats",
      "Adjustable shoulder strap",
      "Side pocket for water bottle",
      "Soft, breathable cotton canvas",
    ],
    featured: true,
    customizable: true,
  },
  {
    id: "branded-backpack",
    slug: "branded-backpack",
    name: "Branded Backpack",
    category: "promotional-bags",
    shortDescription:
      "A premium canvas backpack ready for your logo and brand colours.",
    description:
      "A clean, minimalist backpack in durable canvas with leather-look trim, designed to carry a laptop and daily essentials comfortably. Ideal as a corporate gift or retail product, it can be fully customised with your branding.",
    images: [
      "/images/categories/promotional-bags.jpg",
      "/images/categories/custom-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Cotton canvas with PU leather trim",
    sizes: ["Standard"],
    colors: [
      { name: "Natural", hex: "#e7dcc8" },
      { name: "Navy", hex: "#2c3a52" },
      { name: "Black", hex: "#262524" },
    ],
    features: [
      "Padded laptop sleeve",
      "Multiple organisation pockets",
      "Adjustable padded straps",
      "Fully customisable with branding",
    ],
    featured: true,
    customizable: true,
    customizationNote:
      "Available with embroidered, screen-printed or woven label branding.",
  },
  {
    id: "promo-cotton-tote",
    slug: "promo-cotton-tote",
    name: "Promo Cotton Tote",
    category: "promotional-bags",
    shortDescription:
      "A cost-effective branded tote for events, retail and campaigns.",
    description:
      "The Promo Cotton Tote delivers maximum brand visibility at a practical price point. Made from quality cotton with a clean print area, it is the classic choice for events, trade shows and retail promotions.",
    images: [
      "/images/categories/tote-bags.jpg",
      "/images/categories/custom-bags.jpg",
    ],
    material: "Cotton canvas (10 oz)",
    sizes: ["Medium", "Large"],
    colors: [
      { name: "Natural", hex: "#e7dcc8" },
      { name: "White", hex: "#f5f2ec" },
      { name: "Black", hex: "#262524" },
    ],
    features: [
      "Large printable area",
      "Lightweight and cost-effective",
      "Reinforced handles",
      "Great for high-volume orders",
    ],
    featured: false,
    customizable: true,
  },
  {
    id: "custom-corporate-backpack",
    slug: "custom-corporate-backpack",
    name: "Custom Corporate Backpack",
    category: "custom-bags",
    shortDescription:
      "A made-to-order backpack built to your exact brand specifications.",
    description:
      "Work directly with our team to specify the fabric, colour, lining, hardware and branding for a backpack made exclusively for your organisation. From the first sample to final production, we manage every detail.",
    images: [
      "/images/categories/promotional-bags.jpg",
      "/images/categories/custom-bags.jpg",
      "/images/branding/hero.jpg",
    ],
    material: "Customisable — canvas, polyester or recycled fabrics",
    sizes: ["Custom"],
    colors: [{ name: "Custom", hex: "#ad6742" }],
    features: [
      "Made-to-order specifications",
      "Choice of materials and hardware",
      "Full branding options",
      "Sampling before bulk production",
    ],
    featured: true,
    customizable: true,
    customizationNote:
      "MOQ and lead times confirmed during enquiry based on your specification.",
  },
  {
    id: "custom-event-tote",
    slug: "custom-event-tote",
    name: "Custom Event Tote",
    category: "custom-bags",
    shortDescription:
      "A bespoke tote designed around your event, campaign or product launch.",
    description:
      "From colour-matched fabrics to custom shapes and premium finishes, the Custom Event Tote is designed entirely around your brief. A memorable, useful giveaway that keeps your brand in front of your audience long after the event.",
    images: [
      "/images/categories/tote-bags.jpg",
      "/images/categories/custom-bags.jpg",
    ],
    material: "Customisable — cotton, jute, canvas or blends",
    sizes: ["Custom"],
    colors: [{ name: "Custom", hex: "#905237" }],
    features: [
      "Bespoke design and colour matching",
      "Custom fabric and finish options",
      "Logo printing or embroidery",
      "Suitable for large events",
    ],
    featured: false,
    customizable: true,
    customizationNote:
      "Share your artwork and target budget — we'll propose the best option.",
  },
];

/** Helper to find a product by its slug (for the detail page). */
export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

/** Helper to list products that belong to a given category id. */
export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.category === categoryId);
}

/** Helper to list featured products. */
export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
