/**
 * ============================================================================
 *  PRODUCT CATEGORIES
 * ============================================================================
 *  Categories are defined once here and used across the home page, products
 *  page filters, and footer. To add, rename or remove a category, edit this
 *  array — the UI updates automatically.
 *
 *  `id`      — stable identifier referenced by products (see products.js)
 *  `slug`    — used for category filter linking
 *  `image`   — placeholder path; replace with the client's real photography
 * ============================================================================
 */

export const categories = [
  {
    id: "tote-bags",
    name: "Tote Bags",
    slug: "tote-bags",
    description:
      "Durable everyday totes in cotton canvas and premium finishes for work, shopping and gifting.",
    image: "/images/categories/tote-bags.jpg",
  },
  {
    id: "shopping-bags",
    name: "Shopping Bags",
    slug: "shopping-bags",
    description:
      "Reusable, sturdy shopping bags that make everyday errands effortless and eco-friendly.",
    image: "/images/categories/shopping-bags.jpg",
  },
  {
    id: "drawstring-bags",
    name: "Drawstring Bags",
    slug: "drawstring-bags",
    description:
      "Lightweight and versatile drawstring bags for sports, travel, events and giveaways.",
    image: "/images/categories/drawstring-bags.jpg",
  },
  {
    id: "travel-bags",
    name: "Travel Bags",
    slug: "travel-bags",
    description:
      "Spacious, well-built weekender and travel bags designed for dependable journeys.",
    image: "/images/categories/travel-bags.jpg",
  },
  {
    id: "yoga-bags",
    name: "Yoga Bags",
    slug: "yoga-bags",
    description:
      "Practical carry solutions for yoga mats and wellness essentials, designed for daily use.",
    image: "/images/categories/yoga-bags.jpg",
  },
  {
    id: "promotional-bags",
    name: "Promotional Bags",
    slug: "promotional-bags",
    description:
      "Brand-ready bags built for marketing campaigns, corporate gifting and retail promotions.",
    image: "/images/categories/promotional-bags.jpg",
  },
  {
    id: "custom-bags",
    name: "Custom Bags",
    slug: "custom-bags",
    description:
      "Made-to-order bags designed to your exact material, size, colour and branding requirements.",
    image: "/images/categories/custom-bags.jpg",
  },
];

/** Return a category by its id, or undefined if not found. */
export function getCategory(id) {
  return categories.find((category) => category.id === id);
}
