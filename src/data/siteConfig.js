/**
 * ============================================================================
 * AROMA INDUSTRIES — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * Update ALL business information in this single file.
 * Every component that displays a phone number, email, address,
 * or social profile reads its value from here.
 * ============================================================================
 */

export const siteConfig = {
  name: "Aroma Industries",

  tagline: "Quality Bags. Crafted for Everyday Life.",

  description:
    "Aroma Industries manufactures quality bags designed for functionality, durability and everyday life. We supply retailers, wholesalers and businesses with dependable products and custom manufacturing solutions.",

  domain: "https://aroma-industries.com",

  contact: {
    phoneDisplay: "+91 9900874902",

    phoneHref: "tel:+919900874902",

    email: "aromaherbexp@gmail.com",

    address:
      "AROMA INDUSTRIES, No. 22, 2nd Main Road, Dattatraya Road, BSK 3rd Stage, Hosakerehalli, Bangalore - 560085, India",

    workingHours: [
      {
        days: "Monday – Friday",
        hours: "9:00 AM – 6:00 PM",
      },
      {
        days: "Saturday",
        hours: "10:00 AM – 4:00 PM",
      },
      {
        days: "Sunday",
        hours: "Closed",
      },
    ],

    // Add your Formspree URL here when you have one.
    formEndpoint: "",

    // Google Maps link.
    // NOTE: This is currently a Google Maps share link,
    // not an Embed URL.
    mapEmbedUrl:"",
  },

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
};