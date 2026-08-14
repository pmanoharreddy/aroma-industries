import { siteConfig } from "@/data/siteConfig";

/**
 * Build a `https://wa.me/<number>?text=<message>` link using the centrally
 * configured WhatsApp number. Change the number once in `siteConfig.js`.
 */
export function buildWhatsAppLink(message) {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled message for general enquiries. */
export function generalEnquiryMessage() {
  return "Hello Aroma Industries, I found your website and would like to know more about your products.";
}

/** Pre-filled message for a specific product. */
export function productEnquiryMessage(productName) {
  return `Hello Aroma Industries, I'm interested in ${productName}. Please provide more information.`;
}
