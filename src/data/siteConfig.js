/**
 * ============================================================================
 *  AROMA INDUSTRIES — CENTRAL SITE CONFIGURATION
 * ============================================================================
 *  Update ALL business information in this single file. Every component that
 *  displays a phone number, email, address, or social profile reads its value
 *  from here, so nothing needs to be changed anywhere else.
 *
 *  Values wrapped in square brackets (e.g. "[PHONE NUMBER]") are intentional
 *  placeholders. Replace them with the real information when it is available.
 * ============================================================================
 */

export const siteConfig = {
  name: "Aroma Industries",
  tagline: "Quality Bags. Crafted for Everyday Life.",
  description:
    "Aroma Industries manufactures quality bags designed for functionality, durability and everyday life. We supply retailers, wholesalers and businesses with dependable products and custom manufacturing solutions.",
  domain: "https://aroma-industries.com",

  contact: {
    phoneDisplay: "[PHONE NUMBER]",
    phoneHref: "tel:+910000000000",
    email: "[EMAIL ADDRESS]",
    address: "[BUSINESS ADDRESS]",
    workingHours: [
      { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
      { days: "Saturday", hours: "10:00 AM – 4:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
    // e.g. "https://formspree.io/f/yourFormId"
    formEndpoint: "",
    // e.g. "https://www.google.com/maps/embed?pb=..."
    mapEmbedUrl: "",
  },

  social: {
    instagram: "", // e.g. "https://instagram.com/aroma.industries"
    facebook: "", // e.g. "https://facebook.com/aromaindustries"
    linkedin: "", // e.g. "https://linkedin.com/company/aroma-industries"
  },
};
